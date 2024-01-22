document.addEventListener("DOMContentLoaded", function() {
    setupPriceSection();
    setupVersionSection();
    setupColorSection();
    setupWheelSection();
    setupInteriorSection();
});

function setupPriceSection() {
    var buttonPrice = document.querySelectorAll(".price");
    var priceSelector = document.getElementById("version");

    buttonPrice.forEach(function(button, index) {
        button.addEventListener("click", function() {
            buttonPrice.forEach(function(btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            if (index === 0 && this.classList.contains('active')) {
                priceSelector.innerHTML = `
                <h2>Dual Motor All-Wheel Drive</h2>
                <button type="button" class="version active">
                  <p>Model S</p>
                  <p>$74,990*</p>
                </button>
                <h2>Tri Motor All-Wheel Drive</h2>
                <button type="button" class="version">
                  <p>Model S Plaid</p>
                  <p>$89,990*</p>
                </button>
                <p>All prices are shown without probable incentives or est. 3-year gas savings of $3,900. <a href="#">See Details</a></p>
              `;} else {
                priceSelector.innerHTML = `
                <h2>Dual Motor All-Wheel Drive</h2>
                <button type="button" class="version active">
                  <p>Model S</p>
                  <p>$71,090*</p>
                </button>
                <h2>Tri Motor All-Wheel Drive</h2>
                <button type="button" class="version">
                  <p>Model S Plaid</p>
                  <p>$86,090*</p>
                </button>
                <p>* Prices include est. gas savings of $3,900 over 3 years.
              `;}
        });
    });
}

function setupVersionSection() {
    var buttonModel = document.querySelectorAll(".version");
    var modelSelector = document.querySelector("#base div:nth-child(6)");

    buttonModel.forEach(function(button, index) {
        button.addEventListener("click", function() {
            buttonModel.forEach(function(btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            if (index === 0 && this.classList.contains('active')) {
                modelSelector.innerHTML = `
                    <div>
                        <h2>405 mi</h2>
                        <p>Range (est.)</p>
                    </div>
                    <div>
                        <h2>130 mph</h2>
                        <p>Top Speed</p>
                    </div>
                    <div>
                        <h2>3.1 sec</h2>
                        <p>0-60 mph</p>
                    </div>
              `;} else {
                modelSelector.innerHTML = `
                    <div>
                        <h2>359 mi</h2>
                        <p>Range (est.)</p>
                    </div>
                    <div>
                        <h2>200 mph</h2>
                        <p>Top Speed</p>
                    </div>
                    <div>
                        <h2>1.99 sec</h2>
                        <p>0-60 mph</p>
                    </div>
              `;}
        });
    });
}

function setupColorSection() {
    var buttonModel = document.querySelectorAll("#customize div:nth-child(4) .color");
    var colorSelector = document.getElementById("color");

    buttonModel.forEach(function(button, index) {
        button.addEventListener("click", function() {
            buttonModel.forEach(function(btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            if (index === 0 && this.classList.contains('active')) {
                colorSelector.src = './images/sidegrey.png';
            } else if (index === 1 && this.classList.contains('active')) {
                colorSelector.src = './images/sidewhite.png';
            } else if (index === 2 && this.classList.contains('active')) {
                colorSelector.src = './images/sideblue.png';
            } else if (index === 3 && this.classList.contains('active')) {
                colorSelector.src = './images/sideblack.png';
            } else {
                colorSelector.src = './images/sidered.png';
            }
        });
    });
}

function setupWheelSection() {
    var buttonModel = document.querySelectorAll("#customize div:nth-child(9) .color");
    var colorSelector = document.getElementById("wheels");

    buttonModel.forEach(function(button, index) {
        button.addEventListener("click", function() {
            buttonModel.forEach(function(btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            if (index === 0 && this.classList.contains('active')) {
                colorSelector.src = './images/wheel1.png';
            } else {
                colorSelector.src = './images/wheel2.png';
            }
        });
    });
}

function setupInteriorSection() {
    var buttonModel = document.querySelectorAll("#customize div:nth-child(17) .color");
    var colorSelector = document.getElementById("interior");

    buttonModel.forEach(function(button, index) {
        button.addEventListener("click", function() {
            buttonModel.forEach(function(btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            if (index === 0 && this.classList.contains('active')) {
                colorSelector.src = './images/interior1.jpeg';
            } else if (index === 1 && this.classList.contains('active')) {
                colorSelector.src = './images/interior2.jpeg';
            } else {
                colorSelector.src = './images/interior3.jpeg';
            }
        });
    });
}

// bron: "ChatGPT"