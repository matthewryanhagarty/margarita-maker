// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-used").on("click", function(event) {
      var id = $(this).data("id");
      var nowUsed = $(this).data("state");
  
      var newNowUsed = {
        used: nowUsed
      };
  
      // Send the PUT request.
      $.ajax("/api/ingredients/" + id, {
        type: "PUT",
        data: newNowUsed
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newIngredient = {
        ingredient_name: $("#ingredient-form").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/ingredients", {
        type: "POST",
        data: newIngredient
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".delete-ingredient").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/ingredients/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted ingredient", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  