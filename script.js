(function () {
  "use strict";

  let SPIN_RES = [];


  const items = [
    {html: `<img src="./pics/reap.webp" data-link='./video/reaper.webm' />`, value: ''},
    {html: `<img src="./pics/reap.webp" data-link='./video/reaper.webm' />`, value: ''},
    {html: `<img src="./pics/reap.webp" data-link='./video/reaper.webm' />`, value: ''},

    {html: `<img src="./pics/squid_shark.png" data-link='./video/squidshark.webm' />`, value: ''},
    {html: `<img src="./pics/squid_shark.png" data-link='./video/squidshark.webm' />`, value: ''},
    {html: `<img src="./pics/squid_shark.png" data-link='./video/squidshark.webm' />`, value: ''},

    {html: `<img src="./pics/traider.webp" data-link='./video/seatraider.webm' />`, value: ''},
    {html: `<img src="./pics/traider.webp" data-link='./video/seatraider.webm' />`, value: ''},
    {html: `<img src="./pics/traider.webp" data-link='./video/seatraider.webm' />`, value: ''},

    {html: `<img src="./pics/craw.png" data-link='' />`, value: ''},
    {html: `<img src="./pics/craw.png" data-link='' />`, value: ''},
    {html: `<img src="./pics/craw.png" data-link='' />`, value: ''},

    {html: `<img src="./pics/SeaMonkey.webp" data-link='./video/seamonkey.webm' />`, value: ''},
    {html: `<img src="./pics/SeaMonkey.webp" data-link='./video/seamonkey.webm' />`, value: ''},
    {html: `<img src="./pics/SeaMonkey.webp" data-link='./video/seamonkey.webm' />`, value: ''},

    {html: `<img src="./pics/crash.png" data-link='./video/crashfish.webm' />`, value: ''},
    {html: `<img src="./pics/crash.png" data-link='./video/crashfish.webm' />`, value: ''},
    {html: `<img src="./pics/crash.png" data-link='./video/crashfish.webm' />`, value: ''},

    {html: `<img src="./pics/peng.png" data-link='./video/pengwings.webm' />`, value: ''},
    {html: `<img src="./pics/peng.png" data-link='./video/pengwings.webm' />`, value: ''},
    {html: `<img src="./pics/peng.png" data-link='./video/pengwings.webm' />`, value: ''},

    {html: `<img src="./pics/snow-stal.png" data-link='./video/snowstalker.webm' />`, value: ''},
    {html: `<img src="./pics/snow-stal.png" data-link='./video/snowstalker.webm' />`, value: ''},
    {html: `<img src="./pics/snow-stal.png" data-link='./video/snowstalker.webm' />`, value: ''},

    {html: `<img src="./pics/sea-drag.png" data-link='./video/seadragon.webm' />`, value: ''},
    {html: `<img src="./pics/sea-drag.png" data-link='./video/seadragon.webm' />`, value: ''},
    {html: `<img src="./pics/sea-drag.png" data-link='./video/seadragon.webm' />`, value: ''},

    {html: `<img src="./pics/Shadow_Leviathan_Fauna.webp" data-link='./video/shadow.webm' />`, value: ''},
    {html: `<img src="./pics/Shadow_Leviathan_Fauna.webp" data-link='./video/shadow.webm' />`, value: ''},
    {html: `<img src="./pics/Shadow_Leviathan_Fauna.webp" data-link='./video/shadow.webm' />`, value: ''},

    {html: `<img src="./pics/cuddle.png" data-link='./video/cuddlefish.webm' />`, value: ''},
    {html: `<img src="./pics/cuddle.png" data-link='./video/cuddlefish.webm' />`, value: ''},
    {html: `<img src="./pics/cuddle.png" data-link='./video/cuddlefish.webm' />`, value: ''},

    {html: `<img src="./pics/reefback.png" data-link='./video/reefback.webm' />`, value: ''},
    {html: `<img src="./pics/reefback.png" data-link='./video/reefback.webm' />`, value: ''},
    {html: `<img src="./pics/reefback.png" data-link='./video/reefback.webm' />`, value: ''},

    {html: `<img src="./pics/bite.png" data-link='./video/bite.webm' />`, value: ''},
    {html: `<img src="./pics/bite.png" data-link='./video/bite.webm' />`, value: ''},
    {html: `<img src="./pics/bite.png" data-link='./video/bite.webm' />`, value: ''},

    {html: `<img src="./pics/cheli.png" data-link='./video/chelistale.webm' />`, value: ''},
    {html: `<img src="./pics/cheli.png" data-link='./video/chelistale.webm' />`, value: ''},
    {html: `<img src="./pics/cheli.png" data-link='./video/chelistale.webm' />`, value: ''},

    {html: `<img src="./pics/ghost.webp" data-link='./video/ghost.webm' />`, value: ''},
    {html: `<img src="./pics/ghost.webp" data-link='./video/ghost.webm' />`, value: ''},
    {html: `<img src="./pics/ghost.webp" data-link='./video/ghost.webm' />`, value: ''},

    {html: `<img src="./pics/stalker.png" data-link='./video/stalker.webm' />`, value: ''},
    {html: `<img src="./pics/stalker.png" data-link='./video/stalker.webm' />`, value: ''},
    {html: `<img src="./pics/stalker.png" data-link='./video/stalker.webm' />`, value: ''},

 
   
  ];
  // document.querySelector(".info").textContent = items.join(" ");

  const doors = document.querySelectorAll(".door");
  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);

  async function spin() {
    init(false, 1, 1.2);
    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      const duration = parseInt(boxes.style.transitionDuration);
      boxes.style.transform = "translateY(0)";
      
      await new Promise((resolve) => setTimeout(resolve, duration * 100));
    }
    //24
    
  }

  function showModalWithVideo(url) {
    if (!url) {
      return;
    }
    const videoModal = document.querySelector("#modalVideo");
    videoModal.innerHTML = `<video src="${url}" controls></video>`;
    videoModal.style.display = 'block';
  }

  function init(firstInit = true, groups = 1, duration = 1) {
    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);

      const pool = [{html: "❓"}];
      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));

        // boxesClone.addEventListener(
        //   "transitionstart",
        //   function () {
        //     door.dataset.spinned = "1";
        //     this.querySelectorAll(".box").forEach((box) => {
        //       box.style.filter = "blur(1px)";
        //     });
        //   },
        //   { once: true }
        // );

        boxesClone.addEventListener(
          "transitionend",
          function () {
            const boxes = this.querySelectorAll(".box");
            boxes.forEach((box, index) => {
              if (index == 24){
                // box.style['background-color'] = "red";
                const res = box.firstChild.getAttribute('data-link');
                SPIN_RES.push(res);
                if (SPIN_RES.length === 3){
                  setTimeout(()=>{
                    if (SPIN_RES[0] == SPIN_RES[1]){
                      console.log('YOU WIN');
                      console.log(SPIN_RES[0]);
                      document.querySelector("#spinner").disabled=true;
                      showModalWithVideo(SPIN_RES[0]);
                      SPIN_RES = [];
                      return;
                    }
                    if (SPIN_RES[0] == SPIN_RES[2]){
                      console.log('YOU WIN');
                      console.log(SPIN_RES[0]);
                      document.querySelector("#spinner").disabled=true;
                      showModalWithVideo(SPIN_RES[0]);
                      SPIN_RES = [];
                      return;
                    }
                    if (SPIN_RES[1] == SPIN_RES[2]){
                      console.log('YOU WIN');
                      console.log(SPIN_RES[2]);
                      document.querySelector("#spinner").disabled=true;
                      showModalWithVideo(SPIN_RES[2]);
                      SPIN_RES = [];
                      return;
                    }
                    SPIN_RES = [];

                  }, 1200);
                }

                // this.innerHTML == 'a';
              }
              // if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
      }
      // console.log(pool);

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        // here img
        box.innerHTML = pool[i].html;
        boxesClone.appendChild(box);
      }
      // console.log(boxesClone);

      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
      }px)`;
      door.replaceChild(boxesClone, boxes);
      // console.log(door);
    }
  }

  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }

  init();
})();