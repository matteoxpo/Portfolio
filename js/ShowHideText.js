function ShowHideText(from) {
    $("." + from).toggle('show');
}

$(document).ready(function () {
    var words = $('.word').text().split(' ');
    var html = '';
    $.each(words, function () {
        html += '<span style="font-size:120%;color:red;text-transform:uppercase;">' + this.substring(0, 1) + '</span>' + this.substring(1) + ' ';
    });
    $('.word').html(html);
});