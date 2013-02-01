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
    var form = $(this).selector;
    var $inputs = $($(this).selector + " input");

    $button.addClass('dim');
    $button.attr('disabled', 'disabled');
    console.log($inputs);

    $inputs.each(function() {
      $(this).attr("data-valid", "false");
    });

    $inputs.on('keyup', function() {
      if ($(this).val().length > 0) {
        $(this).attr("data-valid", "true");
      } else {
        $(this).attr("data-valid", "false");
        $button.addClass('dim');
        $button.attr('disabled', 'disabled');
      }

      if ($(form + ' input[data-valid="false"]').length === 0) {
        $button.removeClass('dim');
        $button.removeAttr('disabled');
      }
    });
  }
})(window.jQuery);
