$(document).ready(function() {

    function loadCategories() {
        $.ajax({
            url: "http://localhost:8080/api/categories",
            method: "GET",
            success: function(data) {
                populateCategories(data);
            },
            error: function(error) {
                console.error("Error fetching categories:", error);
            }
        });
    }


    function populateCategories(categories) {
        var categorySelect = $("#category");
        categorySelect.empty();
        categories.forEach(function(category) {
            var option = `<option value="${category.cid}">${category.name}</option>`;
            categorySelect.append(option);
        });
    }


    loadCategories();


    $("#add-product-form").submit(function(event) {
        event.preventDefault();

        var product = {
            name: $("#name").val(),
            price: $("#price").val(),
            category: { cid: $("#category").val() },
            status: $("#status").val()
        };

        $.ajax({
            url: "http://localhost:8080/api/products",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(product),
            success: function() {
                alert("Thêm sản phẩm thành công!");
                window.location.href = "index.html";
            },
            error: function(error) {
                console.error("Error adding product:", error);
            }
        });
    });

    $("#cancel").click(function() {
        window.location.href = "index.html";
    });
});