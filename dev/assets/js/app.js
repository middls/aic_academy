function onEntry(entry) {
  entry.forEach((change) => {
    if(change.isIntersecting) {
      change.target.classList.add('visible');
    }
  });
}

// список опций
let options = {	
  threshold: [1]
};

let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll(
	'.header-wrapper__content__heading,'+
	' .header-wrapper__content__description, ' + 
	' .head-block__heading, .content-block__description, ' + 
	' .content-block__description__list__item, ' + 
	'.lol, .right-block__heading, .right-block__description');

// let elements = document.querySelectorAll(
// 	`.header-wrapper__content__heading, .header-wrapper__content__description,
// 	 .head-block__heading, .content-block__description,
// 	 .content-block__description__list__item, 
// 	.lol, .right-block__heading, .right-block__description`);

for (let elm of elements) {
  observer.observe(elm);
}


window.onload = function () {

 btnTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
  };

    window.addEventListener('scroll', function() {
      btnTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    });
  }




