$(document).ready(function () {
  $(".second").hide();

  $("button").click(function () {
    $.get(
      "https://www.themealdb.com/api/json/v1/1/random.php",
      function (res) {
        let mealName = "";
        mealName = res.meals[0].strMeal;
        $(".mealResult").text(mealName);
        let cuisineName = "";
        cuisineName = res.meals[0].strArea;
        $(".cuisineResult").text(cuisineName);
        let typeName = "";
        typeName = res.meals[0].strCategory;
        $(".categoryResult").text(typeName);
        // getting Ingredients

        $(".remove1").remove();
        let htmlStr = "";
        for (x in res.meals[0]) {
          for (var i = 0; i <= 20; i++) {
            if (x === "strIngredient" + i) {
              htmlStr += `<p class="remove1">${res.meals[0][x]}</p>`;
              console.log(htmlStr);
            }
          }
        }
        $(".ingredients").append(htmlStr);
        // getting Measurements
        $(".remove2").remove();
        let html2Str = "";
        for (x in res.meals[0]) {
          for (var i = 0; i <= 20; i++) {
            if (x === "strMeasure" + i) {
              html2Str += `<p class="remove2">${res.meals[0][x]}</p>`;
              console.log(htmlStr);
            }
          }
        }
        $(".measure").append(html2Str);

        // getting recipe
        let recipeInstructions = res.meals[0].strInstructions;
        $(".recipe").text(recipeInstructions);

        // meal image
        $(".imageResult").attr("src", res.meals[0].strMealThumb);

        // youtube link
        $(".youtubeResult").attr("href", res.meals[0].strYoutube);

        // reshowing the div
        $(".second").show();

        console.log(res);
      },
      "json"
    );
  });
});
