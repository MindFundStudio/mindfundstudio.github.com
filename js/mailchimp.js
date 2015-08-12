$(document).ready(function() {

  // Submit the form with an ajax/jsonp request.
  // Based on http://stackoverflow.com/a/15120409/215821
  var submitSubscribeForm = function($form) {
    $.ajax({
      type: "GET",
      url: $form.attr("action"),
      data: $form.serialize(),
      cache: false,
      dataType: "jsonp",
      jsonp: "c", // trigger MailChimp to return a JSONP response
      contentType: "application/json; charset=utf-8",
      error: function(error) {
        // According to jQuery docs, this in never called for cross-domain JSONP requests
      },
      success: function(data) {
        console.log(data);
        var resultMessage = data.msg || "Opps. Seems we can't reach our server at this time.";
        if (data.result != "success") {
          if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
            resultMessage = "You're already subscribed. Thank you.";
          }
        } else {
          resultMessage = "Thank you!<br>Please confirm your email from your inbox.";
        }

        $('.signup_message').html(resultMessage);
        $('.signup_message').fadeIn();
      }
    });
  }

  $('.signup_message').hide();

  $("#mc-embedded-subscribe-form").submit(function(e) {
    e.preventDefault();
    $('.signup_message').fadeOut();
    submitSubscribeForm($("#mc-embedded-subscribe-form"));
  });

  $('a[href^="#"]').on('click',function (e) {

      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 300, 'swing', function () {
          window.location.hash = target;
      });
  });
});
