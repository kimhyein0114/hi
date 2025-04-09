// 네비게이션이 스크롤했을때 보이게
$(document).ready(function() {
    let isExpanded = false;

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.toggle-btn').fadeIn();
        } else {
            $('.toggle-btn').fadeOut();
            $('nav').removeClass('expanded');
            $('.toggle-btn').removeClass('active');
        }
    });

    $('.toggle-btn').click(function() {
        isExpanded = !isExpanded;
        $('nav').toggleClass('expanded');
        $(this).toggleClass('active');
    });
});

// main "about" section
$(document).ready(function () {
  $('.tab-btn').click(function () {
    $('.tab-content').removeClass('active');
    $($(this).data('target')).addClass('active');

    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
  });
});

  // FQA
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


  //웹 포트폴리오
  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray(".card");

  cards.forEach((card, index) => {
    const start = window.innerHeight * index;

    gsap.fromTo(card,
      {
        opacity: 0,
        y: 100,
        scale: 1.2,
        filter: "blur(10px) grayscale(100%)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px) grayscale(0%)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#web-portfolio",
          start: () => `top -${start}`,
          end: () => `+=${window.innerHeight}`,
          scrub: true,
        }
      }
    );
  });


  $(function(){
    $('.gallery li').each(function(index, el){
        $(el).mouseenter(function(){
            $(this).find('video')[0].play()
        })
        $(el).mouseleave(function(){
            $(this).find('video')[0].pause()
            $(this).find('video')[0].currentTime = 0
        })

        $(el).click(function(){
            const title = $(this).find('h3').text()
            const txt = $(this).find('p').text()
            const videoSrc = $(this).find('video').attr('src')

            $('.popup').find('h2').text(title)
            $('.popup').find('p').text(txt)
            $('.popup').find('video').attr('src', videoSrc)

            $('.popup').addClass('on')
            $('.popup').find('video')[0].play()
        })
    })

    $('.popup button').click(function(){
        $('.popup').removeClass('on')
        $('.popup').find('video')[0].pause()
    })
})


gsap.to(".portfolio-intro", {
  opacity: 0,
  y: 50,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".card-fake-trigger",
    start: "top+=1600 center",  // 💡 300px 더 스크롤 내려야 시작됨
    end: "top+=1600 center",    // 💡 사라짐 종료도 그만큼 늦춰짐
    scrub: 1.5,
  }
});
  
// 네비게이션(탭메뉴) 외부 클릭 시 닫기
$(document).mouseup(function(e) {
  var navContainer = $("nav, .toggle-btn");
  if (!navContainer.is(e.target) && navContainer.has(e.target).length === 0) {
    $('nav').removeClass('expanded');
    $('.toggle-btn').removeClass('active');
    isExpanded = false;  // 기존 변수 사용 시 업데이트
  }
});

// 팝업 외부 클릭 시 닫기
$(document).mouseup(function(e) {
  var popup = $(".popup");
  if (popup.hasClass('on') && !popup.is(e.target) && popup.has(e.target).length === 0) {
    popup.removeClass('on');
    popup.find('video')[0].pause();
  }
});

  