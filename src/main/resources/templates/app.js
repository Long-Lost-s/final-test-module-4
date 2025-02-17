$(document).ready(function() {
    function loadProducts() {
        $.ajax({
            url: "http://localhost:8080/api/products",
            method: "GET",
            success: function(data) {
                displayProducts(data);
            },
            error: function(error) {
                console.error("Error fetching products:", error);
            }
        });
    }

    function displayProducts(products) {
        var productTable = $("#product-list");
        productTable.empty();

        products.forEach(function(product, index) {
            var row = `
            <tr>
                <td>${index + 1}</td>
                <td><input type="checkbox" class="product-checkbox" data-id="${product.id}"></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category.name}</td>
                <td>${product.status}</td>
                <td><button class="btn btn-primary edit-btn" data-id="${product.id}">Sửa</button></td>
            </tr>
        `;
            productTable.append(row);
        });

        $(".edit-btn").click(function() {
            var productId = $(this).data("id");
            window.location.href = `edit-product.html?id=${productId}`; // Điều hướng đến trang sửa sản phẩm với ID sản phẩm
        });
    }


    loadProducts();

    $("#search-form").submit(function(event) {
        event.preventDefault();
    });


    $("#delete").click(function() {
        var selectedProducts = [];
        $(".product-checkbox:checked").each(function() {
            selectedProducts.push($(this).data("id"));
        });

        if (selectedProducts.length > 0) {
            if (confirm("Bạn có muốn xóa tất cả sản phẩm đã chọn?")) {
                deleteProducts(selectedProducts);
            }
        } else {
            alert("Vui lòng chọn ít nhất một sản phẩm để xóa.");
        }
    });


    function deleteProducts(ids) {
        ids.forEach(function(id) {
            $.ajax({
                url: `http://localhost:8080/api/products/${id}`,
                method: "DELETE",
                success: function() {
                    alert("Xóa thành công!");
                    loadProducts();
                },
                error: function(error) {
                    console.error("Error deleting product with ID " + id + ":", error);
                }
            });
        });
    }


    $("#add").click(function() {

        window.location.href = "add-product-page.html";
    });
});