$ ->
  $('.project').on 'click', (e) ->
    link = $(this).data('href')
    window.open link