javascript:(function () {
    var clickX = 0,
        clickY = 0,
        currentEvent,
        select, text,
        elem,

        button = document.createElement('a');
    button.setAttribute('href','');
    button.setAttribute('id','searchVS12');
    button.innerHTML = 'Search';

    document.onclick = function () {
        mouseUp();
    };

    function selectEvent () {
        select = '';

        if (window.getSelection()) {
            select = window.getSelection();
        } else if (document.getSelection()) {
            select = document.getSelection();
        } else {
            select = document.selection.createRange().text;
        }
        return select;
    }

    function coordinateSelect (e) {
        currentEvent = e || window.event;

        if ((currentEvent.clientX || currentEvent.clientY)) {
            clickX = currentEvent.clientX + document.body.scrollLeft;
            clickY = currentEvent.clientY + document.body.scrollTop;
        }

        document.body.appendChild(button);

        button.style.position = 'absolute';
        button.style.top = clickY - 30 + 'px';
        button.style.left = clickX + 10 + 'px';

        button.setAttribute('href', 'http://www.google.com/search?q=' + encodeURIComponent(select));
        button.setAttribute('target', '_blank');

        button.addEventListener('click', HideShow, false);
        function HideShow() {
            this.style.display = 'none';
        }
    }

    function mouseUp() {
        text = selectEvent();

        if(text != '') {
            coordinateSelect(event);
        } else if (text.length === undefined) {
            elem = document.getElementById('searchVS12');
            elem.parentNode.removeChild(elem);
        }
    }
})();
