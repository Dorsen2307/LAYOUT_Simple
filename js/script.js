function searchShow(input, divs, icon) {
    const searchInput = document.getElementById(input);
    const searchIcon = icon;

    // форматируем сетку
    formatGrid(divs);

    // устанавливаем класс active на поле ввода
    formatInput(searchInput);

    // скрываем иконку
    searchInput.style.display = "block";
    searchIcon.style.display = "none";

    // ставим курсор в поле
    searchInput.focus();
    searchInput.select();
}

function searchHide(input, divs, icon) {
    const searchInput = input;
    const searchIcon = document.getElementById(icon);

    // форматируем сетку
    formatGrid(divs);

    // удаляем класс active с поля ввода
    formatInput(searchInput);

    // скрываем поле
    searchInput.style.display = "none";
    searchIcon.style.display = "block";
}

function formatGrid (divs) {
    for (let div in divs) {
        let elem = document.getElementById(div);
        let value = divs[div];
        let rem = value.removes;
        let add = value.added;

        for (let item of rem) {
            elem.classList.remove(item);
        }

        for (let item of add) {
            elem.classList.add(item);
        }
    }
}

function formatInput (elem) {
    elem.classList.toggle("active");
}

document.getElementById("search-icon1").addEventListener("click", function(){
    let divs;

    if (window.innerWidth >= 1200) {
        divs = {
            "nav" : {
                removes : ["offset-xl-4",],
                added : ["offset-xl-1",]
            },
            "search-div1" : {
                removes : ["offset-lg-0", "col-lg-1"],
                added : ["offset-lg-1", "col-lg-3"]
            }
        };
    } else if (window.innerWidth >= 992) {
        divs = {
            "nav" : {
                removes : ["offset-lg-3",],
                added : ["offset-lg-1",]
            },
            "search-div1" : {
                removes : ["col-lg-1",],
                added : ["col-lg-3",]
            }
        };
    } else if (window.innerWidth >= 768) {
        divs = {
            "search-div1" : {
                removes : ["offset-md-7", "col-md-2"],
                added : ["offset-md-4", "col-md-5"]
            }
        };
    } else {
        divs = {
            "search-div1" : {
                removes : ["offset-sm-6", "col-sm-2"],
                added : ["offset-sm-2", "col-sm-6"]
            }
        };
    }

    searchShow("search-input1", divs, this);
});

document.getElementById("search-input1").addEventListener("blur", function() {
    let divs;

    if (window.innerWidth >= 1200) {
        divs = {
            "nav" : {
                removes : ["offset-xl-1",],
                added : ["offset-xl-4",]
            },
            "search-div1" : {
                removes : ["offset-lg-1", "col-lg-3"],
                added : ["offset-lg-0", "col-lg-1"]
            }
        };
    } else if (window.innerWidth >= 992) {
        divs = {
            "nav" : {
                removes : ["offset-lg-1",],
                added : ["offset-lg-3",]
            },
            "search-div1" : {
                removes : ["col-lg-3",],
                added : ["col-lg-1",]
            }
        };
    } else if (window.innerWidth >= 768) {
        divs = {
            "search-div1" : {
                removes : ["offset-md-4", "col-md-5"],
                added : ["offset-md-7", "col-md-2"]
            }
        };
    } else {
        divs = {
            "search-div1" : {
                removes : ["offset-sm-2", "col-sm-6"],
                added : ["offset-sm-6", "col-sm-2"]
            }
        };
    }

    searchHide(this, divs, "search-icon1")
});

document.getElementById("search-icon2").addEventListener("click", function(){
    const divs = {
        "search-div2" : {
            removes : ["offset-6", "col-4"],
            added : ["offset-3", "col-7"]
        }
    };

    searchShow("search-input2", divs, this);
});

document.getElementById("search-input2").addEventListener("blur", function() {
    const divs = {
        "search-div2" : {
            removes : ["offset-3", "col-7"],
            added : ["offset-6", "col-4"]
        }
    };

    searchHide(this, divs, "search-icon2");
});

window.addEventListener("resize", function() {
    const searchInput1 = document.getElementById("search-input1");
    const searchInput2 = document.getElementById("search-input2");

    if (searchInput1 !== "none") {
        searchInput1.blur();
    }

    if (searchInput2 !== "none") {
        searchInput2.blur();
    }

})