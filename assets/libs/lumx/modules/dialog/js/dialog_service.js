(function()
{
    'use strict';

    angular
        .module('lumx.dialog')
        .service('LxDialogService', LxDialogService);

    LxDialogService.$inject = ['$interval', '$rootScope', '$timeout', '$window', 'LxDepthService', 'LxEventSchedulerService'];

    function LxDialogService($interval, $rootScope, $timeout, $window, LxDepthService, LxEventSchedulerService)
    {
        var service = this;
        var activeDialogId;
        var dialog;
        var dialogContent;
        var dialogFilter;
        var dialogFooter;
        var dialogHeader;
        var dialogHeight;
        var dialogInterval;
        var dialogScrollable;
        var idEventScheduler;
        var resizeDebounce;
        var scopeMap = {};
        var windowHeight;

        service.close = closeDialog;
        service.open = openDialog;
        service.registerScope = registerScope;

        ////////////

        function closeDialog(_dialogId)
        {
            if (angular.isDefined(idEventScheduler))
            {
                LxEventSchedulerService.unregister(idEventScheduler);
                idEventScheduler = undefined;
            }

            angular.element('.dialog__scrollable').unbind('scroll', checkScrollEnd);

            activeDialogId = undefined;

            $rootScope.$broadcast('lx-dialog__close-start', _dialogId);

            if (resizeDebounce)
            {
                $timeout.cancel(resizeDebounce);
            }

            $interval.cancel(dialogInterval);

            dialogFilter.removeClass('dialog-filter--is-shown');
            scopeMap[_dialogId].element.removeClass('dialog--is-shown');

            $timeout(function()
            {
                angular.element('body').css(
                {
                    overflow: 'visible'
                });

                dialogFilter.remove();

                dialog = undefined;
                dialogHeader = undefined;
                dialogContent = undefined;
                dialogFooter = undefined;
                dialogScrollable = undefined;

                scopeMap[_dialogId].element
                    .hide()
                    .removeClass('dialog--is-fixed')
                    .appendTo(scopeMap[_dialogId].elementParent);

                scopeMap[_dialogId].isOpen = false;
                dialogHeight = undefined;
                $rootScope.$broadcast('lx-dialog__close-end', _dialogId);
            }, 600);
        }

        function checkDialogHeight(_dialogId)
        {
            if (angular.isUndefined(dialogHeader))
            {
                dialog = scopeMap[_dialogId].element;
                dialogHeader = dialog.find('.dialog__header');
                dialogContent = dialog.find('.dialog__content');
                dialogFooter = dialog.find('.dialog__footer');

                if (!dialogFooter.length)
                {
                    dialogFooter = dialog.find('.dialog__actions');
                }

                if (angular.isUndefined(dialogHeader))
                {
                    return;
                }
            }

            var heightToCheck = 60 + dialogHeader.outerHeight() + dialogContent.outerHeight() + dialogFooter.outerHeight();

            if (dialogHeight === heightToCheck && windowHeight === $window.innerHeight)
            {
                return;
            }

            dialogHeight = heightToCheck;
            windowHeight = $window.innerHeight;

            if (heightToCheck >= $window.innerHeight)
            {
                dialog.addClass('dialog--is-fixed');

                if (dialog.find('.dialog__scrollable').length === 0)
                {
                    var dialogScrollable = angular.element('<div/>',
                    {
                        class: 'dialog__scrollable'
                    });

                    dialogScrollable
                        .css(
                        {
                            top: dialogHeader.outerHeight(),
                            bottom: dialogFooter.outerHeight()
                        })
                        .bind('scroll', checkScrollEnd);

                    dialogContent.wrap(dialogScrollable);
                }
            }
            else
            {
                dialog.removeClass('dialog--is-fixed');

                if (dialog.find('.dialog__scrollable').length > 0)
                {
                    dialogContent.unwrap();
                }
            }
        }

        function checkScrollEnd()
        {
            if (angular.isUndefined(dialogScrollable))
            {
                dialogScrollable = angular.element('.dialog__scrollable');

                if (angular.isUndefined(dialogScrollable))
                {
                    return;
                }
            }

            if (angular.isDefined(scopeMap[activeDialogId]))
            {
                if (dialogScrollable.scrollTop() + dialogScrollable.innerHeight() >= dialogScrollable[0].scrollHeight)
                {
                    $rootScope.$broadcast('lx-dialog__scroll-end', activeDialogId);

                    dialogScrollable.unbind('scroll', checkScrollEnd);

                    $timeout(function()
                    {
                        dialogScrollable.bind('scroll', checkScrollEnd);
                    }, 500);
                }
            }
        }

        function onKeyUp(_event)
        {
            if (_event.keyCode == 27 && angular.isDefined(activeDialogId))
            {
                closeDialog(activeDialogId);
            }

            _event.stopPropagation();
        }

        function openDialog(_dialogId)
        {
            LxDepthService.register();

            activeDialogId = _dialogId;

            angular.element('body').css(
            {
                overflow: 'hidden'
            });

            dialogFilter = angular.element('<div/>',
            {
                class: 'dialog-filter'
            });

            dialogFilter
                .css('z-index', LxDepthService.getDepth())
                .appendTo('body');

            if (scopeMap[activeDialogId].autoClose)
            {
                dialogFilter.bind('click', function()
                {
                    closeDialog(activeDialogId);
                });
            }

            if (scopeMap[activeDialogId].escapeClose)
            {
                idEventScheduler = LxEventSchedulerService.register('keyup', onKeyUp);
            }

            scopeMap[activeDialogId].element
                .css('z-index', LxDepthService.getDepth() + 1)
                .appendTo('body')
                .show();

            $timeout(function()
            {
                $rootScope.$broadcast('lx-dialog__open-start', activeDialogId);

                scopeMap[activeDialogId].isOpen = true;

                dialogFilter.addClass('dialog-filter--is-shown');
                scopeMap[activeDialogId].element.addClass('dialog--is-shown');
            }, 100);

            $timeout(function()
            {
                $rootScope.$broadcast('lx-dialog__open-end', activeDialogId);
            }, 700);

            dialogInterval = $interval(function()
            {
                checkDialogHeight(activeDialogId);
            }, 500);
        }

        function registerScope(_dialogId, _dialogScope)
        {
            scopeMap[_dialogId] = _dialogScope.lxDialog;
        }

        angular.element($window).on('resize', function()
        {
            if (angular.isDefined(activeDialogId))
            {
                if (resizeDebounce)
                {
                    $timeout.cancel(resizeDebounce);
                }

                resizeDebounce = $timeout(function()
                {
                    checkDialogHeight(activeDialogId);
                }, 200);
            }
        });
    }
})();