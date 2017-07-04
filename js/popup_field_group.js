(function ($) {

  'use strict';

  /**
   * Behaviors.
   */
  Drupal.behaviors.fieldGroup = {
    attach: function (context, settings) {

      $('.' + settings.popupFieldGroup.linkCssClass, context).once('popup-field-group').each(function () {
        var link = $(this),
            targetId = link.data('target');

        if (typeof settings.popupFieldGroup.popups[targetId] !== "undefined") {
          var popupContent = $('#' + targetId),
              popupSettings = settings.popupFieldGroup.popups[targetId];

          if (popupContent.length > 0) {
            var dialog = Drupal.dialog(popupContent, popupSettings.dialog);

            link.click(function(){
              if (popupSettings.modal) {
                dialog.showModal();
              }
              else {
                dialog.show();
              }
            });

          }
        }

      });
    }
  };

})(jQuery);
