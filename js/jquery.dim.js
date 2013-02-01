/**
 *  jQuery Dim Plugin
 *
 *  https://github.com/bryanmikaelian/dim
 *
 *  MIT licensed, (c) 2013 Bryan Mikaelian
 *
 */

;(function($) {

  $.fn.dim = function(opts) {
    var $button = $(opts.button);

    $('input').each(function() {
      $(this).attr("data-valid", "false");
    });

    if ($('input').val() === "" && $('input').val().length < 1) {
      $button.addClass('dim');
      $button.attr('disabled', 'disabled');
    }

    $('input').on('keyup', function() {
      if ($(this).val().length > 0) {
        $(this).attr("data-valid", "true");
      } else {
        $(this).attr("data-valid", "false");
        $button.addClass('dim');
        $button.attr('disabled', 'disabled');
      }

      if ($('input[data-valid="false"]').length === 0) {
        $button.removeClass('dim');
        $button.removeAttr('disabled');
      }
    });
  }
})(window.jQuery);
