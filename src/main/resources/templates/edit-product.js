$(document).ready(function() {
    var productId = getParameterByName('id');

    function loadCategories(selectedCategory) {
        $.ajax({
            url: "http://localhost:8080/api/categories",
            method: "GET",
            success: function(data) {
                populateCategories(data, selectedCategory);
            },
            error: function(error) {
                console.error("Error fetching categories:", error);
            }
        });
    }

    function populateCategories(categories, selectedCategory) {
        var categorySelect = $("#category");
        categorySelect.empty();
        categories.forEach(function(category) {
            var selected = category.cid == selectedCategory ? 'selected' : '';
            var option = `<option value="${category.cid}" ${selected}>${category.name}</option>`;
            categorySelect.append(option);
        });
    }

    function loadProduct() {
        $.ajax({
            url: `http://localhost:8080/api/products/${productId}`,
            method: "GET",
            success: function(product) {
                $("#name").val(product.name);
                $("#price").val(product.price);
                $("#status").val(product.status);
                loadCategories(product.category.cid);
            },
            error: function(error) {
                console.error("Error fetching product:", error);
            }
        });
    }

    loadProduct();

    $("#edit-product-form").submit(function(event) {
        event.preventDefault();

        var product = {
            id: productId,
            name: $("#name").val(),
            price: $("#price").val(),
            category: { cid: $("#category").val() },
            status: $("#status").val()
        };

        $.ajax({
            url: `http://localhost:8080/api/products/${productId}`,
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(product),
            success: function() {
                alert("Sửa sản phẩm thành công!");
                window.location.href = "index.html";
            },
            error: function(error) {
                console.error("Error updating product:", error);
            }
        });
    });

    $("#cancel").click(function() {
        window.location.href = "index.html";
    });
    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
});