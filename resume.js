var navi = document.getElementById('list');
var naviAnchor = navi.getElementsByTagName('a');
for (var i = 0; i < naviAnchor.length; i++) {
    naviAnchor[i].addEventListener('click', function(event) {
        var destinationid = this.getAttribute('href');
        destinationid = destinationid.substring(1, destinationid.length);
        var destination = document.getElementById(destinationid);
        var destCoor = (destination.getBoundingClientRect().bottom+destination.getBoundingClientRect().top)/2;
        event.preventDefault();
        var curr = 0;
        var intervalId = setInterval(function() {
            if (curr >= (destCoor)) {
                clearInterval(intervalId);
            }
            window.scrollBy(0, 80);
            curr += 100;
        }, 50);
    })
}
var skillelem = document.querySelectorAll('.skill-percentage');
var onetimeanimation = new Array(skillelem.length);
for (let j = 0; j < skillelem.length; j++) {
    onetimeanimation[j] = 0;
}

window.addEventListener('scroll', function() {
    let i = 0;


    for (let e of skillelem) {
        console.log(e);
        if (e.getBoundingClientRect().top <= window.innerHeight && onetimeanimation[i] == 0) {
            onetimeanimation[i] = 1;
            let percent = e.getAttribute('percent');
            e.style.paddingLeft = "1rem";
            e.style.boxShadow = "1px 0 2px 1px gray";
            let count = 0;
            var stopint = setInterval(function() {
                if (count >= parseInt(percent)) {
                    clearInterval(stopint);
                    return;
                }
                e.style.width = count + "%";
                count += 5;
            }, 50);
        } else if (e.getBoundingClientRect().top > window.innerHeight) {
            onetimeanimation[i] = 0;
            console.log('hello');
            e.style.width = "0%";
            e.style.padding = "0%";
        }
        i++;
    }
});