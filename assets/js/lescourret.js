$('h1').each(function() {
    $(this).nextUntil('h1,footer').andSelf().wrapAll('<section></section>');
});
$('h2').each(function() {
    $(this).nextUntil('h1,h2,footer').andSelf().wrapAll('<section></section>');
});
$('h3').each(function() {
    $(this).nextUntil('h1,h2,h3,footer').andSelf().wrapAll('<section></section>');
});
