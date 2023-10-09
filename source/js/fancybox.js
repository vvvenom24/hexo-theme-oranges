// fancybox js
let fancyTimer = setInterval(function(){
  if(!window.$){
    return;
  }
  $(document).ready(function() {
    $(".markdown-body img").each(function () {
      if($(this).parent().get(0).tagName.toLowerCase() === "a") {
        return;
      }
      // $(this).attr("data-fancybox", "gallery"); // if you add 'data-fancybox', img will display after showed
      var element = document.createElement("a");
      $(element).attr("data-fancybox", "gallery");
      $(element).attr("style", "text-decoration: none; outline: none; border: 0px none transparent;");
      // 判断是否启用了lazyload图片懒加载
      if ($(this).attr("data-original")) {
        $(element).attr("href", $(this).attr("data-original"));
      } else {
        $(element).attr("href", $(this).attr("src"));
      }
      $(this).wrap(element);

      // img add figcaption
      if ($(this).attr("alt")) {
        // Get the value of the 'alt' attribute
        var altText = $(this).attr("alt");

        // Create a <figcaption> element and set its text content
        var figcaption = document.createElement("figcaption");
        $(figcaption).text(altText);
        $(figcaption).attr("style", "text-align: center;");

        // Remove the 'alt' attribute from the img element
        $(this).removeAttr("alt");

        // Insert the <figcaption> element after the img element
        $(this).after(figcaption);
      } else {
        // If 'alt' attribute is not present or empty, do nothing
      }
    });

    clearInterval(fancyTimer);
  });
}, 10);
