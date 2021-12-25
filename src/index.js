var box = document.querySelectorAll(".box");
box.forEach((item, index) => {
  $(item).resizable({
    resize: () => {
      if (index === 0 || index === 1) {
        var i = 0;
        var content;
        index === 0 ? (i = 1) : (i = 0);
        index === 0 ? (content = box[i]) : (content = box[i]);

        let x = box[index].clientWidth;
        let y = box[index].clientHeight;

        let bodyWidth = $("body").width();
        content.style.width = bodyWidth - x + "px";
        content.style.height = y + "px";
      }
      if (index === 2) {
        let x = box[index].clientWidth;
        let y = box[index].clientHeight;
        let bodyWidth = $("body").width();
        let bodyHeight = $("body").height();
        let eHeight = box[index - 1].clientHeight;
        let fWidth = box[0].clientWidth;
        let fHeight = box[0].clientHeight;
        if (x < fWidth) {
          box[index - 1].style.height = y + fHeight + "px";
          box[index].style.top = fHeight + bodyHeight / 50 + "px";
          $(item).parent().addClass("on-right");
        } else {
          box[index - 1].style.height = fHeight + "px";
          $(item).parent().removeClass("on-right");
          box[index].style.top = 0;
        }
        console.log(x + ":" + bodyWidth / 2);
      }
    }
  });
});
