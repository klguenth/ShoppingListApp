//add item section
$(function() {
    $("#js-shopping-list-form").submit(function(e) {
      e.preventDefault();
      const listEntry = $("#shopping-list-entry").val();
      $("#shopping-list-entry").val("");
      const item = `<li>
          <span class="shopping-item">${listEntry}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
        $(".shopping-list").append(item);
    });
  });
  
  //delete section
  $("ul").on('click', 'button.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
  
  //check section
  $("ul").on('click', 'button.shopping-item-toggle', function() {
    $(this).closest('li').toggleClass("shopping-item__checked");
    });