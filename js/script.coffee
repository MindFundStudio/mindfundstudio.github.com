$ ->

  document.addEventListener "touchmove", scrollStart, false

  onScroll = () ->
    top = $(document).scrollTop()
    console.log(top)

    if top > 20
      $('.navigation').addClass 'shrink';
    else
      $('.navigation').removeClass 'shrink';

  scrollStart = (e) ->
    onScroll()


  # Shrink navigation bar
  $(window).scroll () ->
    onScroll()


  # Project click
  $('.project').on 'click', (e) ->
    link = $(this).data('href')
    window.open link

  $('.mindfund').on 'click', (e) ->
    $('#mindfund').removeClass 'hideLeft';
    $('#mindfundstudio').addClass 'hideRight';
    $('.selected').removeClass 'selected';
    $(this).addClass 'selected';
    $('html').addClass 'mindfund';

  $('.mindfundstudio').on 'click', (e) ->
    $('#mindfund').addClass 'hideLeft';
    $('#mindfundstudio').removeClass 'hideRight';
    $('.selected').removeClass 'selected';
    $(this).addClass 'selected';
    $('html').removeClass 'mindfund';
