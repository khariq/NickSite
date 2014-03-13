function spawnThumbnails(event, target)
{
    var thumbnailArea = $('#thumbnails');
    var key = $(target).data('key');
    var spawnTop, spawnLeft;
    spawnTop = $(target).offset().top;
    spawnLeft = $(target).offset().left;
    // fade out all thumbnails
    var thumbnails = thumbnailArea.children("div.thumbnail");
    thumbnails.each(function(){
        $(this).fadeOut("fast");
    });
    var thumbnails = thumbnailArea.children("div.thumbnail[data-parent="+key+"]");
    var index = thumbnails.length;
    var horizontalOffset = 10;
    var delay = 250;
    var delayIndex = 1;
    var leftIndex = 0;
    var row = 0;
    console.log("Starting Thumbnail loop: " + new Date().toString());
    thumbnails.each(function(){

        var thumbnail = $(this);
        thumbnail.css("position", "absolute");

        thumbnail.css("transition", "left 0.5s");

        var left = ((leftIndex  * 100) + (horizontalOffset * leftIndex));
        var top = 20;
        var t = ((top * row) + (75 * (row ))) + 20;;
        thumbnail.delay(delay * delayIndex).fadeIn("slow");
        window.setTimeout(
            function()
            {

                thumbnail.css("left", left + "px" );
                thumbnail.css("top", t + "px" );
            },
            ((thumbnails.length - index) * 250) + 10
        );
        index = index - 1;
        delayIndex = delayIndex + 1;
        leftIndex = leftIndex + 1;
        if (leftIndex % 10 == 0 && leftIndex > 0)
        {
            row = row + 1;
            leftIndex = 0;
        }
    });
    console.log("Ending Thumbnail loop: " + new Date().toString());

}

function portfolioClick(target)
{
    target = $('div#portfolio');
    // move to top position
    var children = $(target).children(".hover-target");
    var index = children.length;
    var horizontalOffset = 10;

    // spawn children

    children.each(function(){
        var child = $(this);
        child.removeClass("hidden");
        child.css("position", "absolute");
        child.css("top", "0");
        child.css("left", "0");
        child.bind("click", function(event) { spawnThumbnails(event, this); } );

        child.css("transition", "left 1.5s");
        var left = (index * 100) + (horizontalOffset * index);
        window.setTimeout(
            function()
            {
                child.css("left", left )
            },
            ((children.length - index) * 250) + 10
        );
        index = index - 1;
    });
}