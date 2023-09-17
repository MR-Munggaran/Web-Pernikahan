const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
    stickyTop.style.overflow = "visible";
    });

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
    stickyTop.style.overflow = "hidden";
      });


      const rootElement = document.querySelector(":root");
      const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
      const audioIcon = document.querySelector(".audio-icon-wrapper i");
      const backgroundmusic = document.querySelector("#backgroundmusic");
      let isPlaying = false;

      function unScroll() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = function () {
          window.scrollTo(scrollTop, scrollLeft);
        };

        rootElement.style.scrollBehavior = "auto";
      }

      function Scroll() {
        window.onscroll = function () {};
        rootElement.style.scrollBehavior = "smooth";
        // localStorage.setItem("opened", "true");
        playAudio();

        function playAudio() {
          backgroundmusic.volume = 0.85;
          audioIconWrapper.style.display = "flex";
          backgroundmusic.play();
          isPlaying = true;
        }
      }

      audioIconWrapper.onclick = function () {
        if (isPlaying) {
          backgroundmusic.pause();
          audioIcon.classList.remove("bi-disc");
          audioIcon.classList.add("bi-pause-circle");
        } else {
          backgroundmusic.play();
          audioIcon.classList.add("bi-disc");
          audioIcon.classList.remove("bi-pause-circle");
        }

        isPlaying = !isPlaying;
      };

      // if (!localStorage.getItem("opened")) {
      //   unScroll();
      // }
      unScroll();


      window.addEventListener("load", function () {
        const form = document.getElementById("my-form");
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          const data = new FormData(form);
          const action = e.target.action;
          fetch(action, {
            method: "POST",
            body: data,
          }).then(() => {
            alert("Konfirmasi kehadiran berhasil terkirim!");
          });
        });
      });


      const urlParams = new URLSearchParams(window.location.search);
      const nama = urlParams.get("n") || "";
      const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";
      const namaContainer = document.querySelector(".hero h4 span");
      namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");

      document.querySelector("#nama").value = nama;
