let amount = 10;

$(document).ready(function () {
    $('#data').hide();
    $('#magic').hide();
    $("#showText").hover(function () {
        $('#showText').hide();
        $('#magic').show();
        $('#data').show();
    });
    //Gets the json and append html to id data
    $.getJSON(`https://www.reddit.com/r/cats/top.json?limit=${amount}`, function (data) {
        $.each(data.data.children, function (i, item) {
            $("#data").append(`
            <hr>
                <div class="divBlock">
                    <div>${item.data.title}</div>
                    <a href="${item.data.url_overridden_by_dest}">Visit the original link</a>
                </div>
            <hr>
            `)
        });
    });
    $(document).on("mouseenter mouseleave", ".divBlock", function () {
        $(this).animate({
            height: "toggle"
          }, 1000, function() {
            $(this).css("background-color", "yellow");
          });
    });
});
