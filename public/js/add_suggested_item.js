$(document).ready(function() {
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const inputQuantity = document.getElementById('input-quantity-two-digits');

    minusButton.addEventListener('click', event => {
      event.preventDefault();
      const currentValue = Number(inputQuantity.value) || 0;
      if (currentValue > 0) {
          inputQuantity.value = currentValue - 1;
      }
    });

    plusButton.addEventListener('click', event => {
      event.preventDefault();
      const currentValue = Number(inputQuantity.value) || 0;
      inputQuantity.value = currentValue + 1;
    });

    $("#nextweek").click(function() {
      $("#nextweek").removeClass('inactive-date');
      $("#nextweek").addClass("active-date");
      $("#thisweek").removeClass('active-date');
      $("#thisweek").addClass("inactive-date");
      $("#lateron").removeClass('active-date');
      $("#lateron").addClass("inactive-date");
    });
    $("#thisweek").click(function() {
      $("#thisweek").removeClass('inactive-date');
      $("#thisweek").addClass("active-date");
      $("#nextweek").removeClass('active-date');
      $("#nextweek").addClass("inactive-date");
      $("#lateron").removeClass('active-date');
      $("#lateron").addClass("inactive-date");
    });
    $("#lateron").click(function() {
      $("#lateron").removeClass('inactive-date');
      $("#lateron").addClass("active-date");
      $("#nextweek").removeClass('active-date');
      $("#nextweek").addClass("inactive-date");
      $("#thisweek").removeClass('active-date');
      $("#thisweek").addClass("inactive-date");
    });
});