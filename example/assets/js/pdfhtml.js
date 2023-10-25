 $(document).ready(function() {
      var pdfUrls = JSON.parse(localStorage.getItem("pdfUrls"));

      $(".pdf-list").empty();

      for (var i = 0; i < pdfUrls.length; i++) {
        var pdfLink = $("<a>").addClass("pdf-link").attr({
          href: pdfUrls[i].url,
          target: "_blank",
          download: pdfUrls[i].name
        }).text(pdfUrls[i].name);

        var fileType = pdfUrls[i].url.split('.').pop().toLowerCase();

        var pdfLogo = $("<img>").addClass("pdf-logo");

        // choose the appropriate logo based on the file type
        if (fileType === 'pdf') {
          pdfLogo.attr({ src: "assets/img/pdf.png", alt: "PDF Logo" });
        } else if (fileType === 'doc' || fileType === 'docx') {
          pdfLogo.attr({ src: "assets/img/word.png", alt: "Word Logo" });
        } else if (fileType === 'xls' || fileType === 'xlsx') {
          pdfLogo.attr({ src: "assets/img/excel.png", alt: "Excel Logo" });
        } else {
          pdfLogo.attr({ src: "assets/img/default.png", alt: "Default Logo" });
        }

        var li = $("<li>").addClass("pdf-item");
        li.append(pdfLogo);
        li.append(pdfLink);

        $(".pdf-list").append(li);
      }

      localStorage.removeItem("pdfUrls");
    });