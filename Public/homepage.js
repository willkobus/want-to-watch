var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.05);
    }, 300);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(1);
});

// video popup

$(document).ready(function () {
  /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
  //   var url = $("#cartoonVideo").attr("src");

  /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
  $("#exampleModal").on("hide.bs.modal", function () {
    $("#cartoonVideo").attr("src", "");
  });

  /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
  $("#exampleModal").on("show.bs.modal", function (e) {
    var url = $(e.relatedTarget).data("url");
    $("#cartoonVideo").attr("src", url);
  });
});
