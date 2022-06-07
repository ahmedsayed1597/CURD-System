

var nameInput = document.getElementById('productName');
var categoryInput = document.getElementById('ProductCategory');
var priceInbut = document.getElementById('ProductPrice');
var discInput = document.getElementById('ProductDescription');

var btnUpdate = document.getElementById('updateBtn');
var btnCancel = document.getElementById('cancelBtn');
var btnClear = document.getElementById('clearBtn');
var searchItem = document.getElementById('searchInput');

var searchContainer = [];

if (localStorage.getItem("myData")) {
    var productContainer = JSON.parse(localStorage.getItem("myData"));
} else {
    var productContainer = [];
}


displayProduct(productContainer);

function createProduct() {
    var oneProduct = {
        pname: nameInput.value,
        catergory: categoryInput.value,
        price: priceInbut.value,
        disc: discInput.value,
    };

    productContainer.push(oneProduct);
    localStorage.setItem("myData", JSON.stringify(productContainer));
    displayProduct(productContainer);
    clearData();
    console.log(productContainer);
}

function displayProduct(list) {

    var tableDisplayProduct = '';
    for (var i = 0; i < list.length; i++) {
        tableDisplayProduct += `<tr>
        <td>${i}</td> 
        <td>${list[i].pname}</td>
        <td>${list[i].catergory}</td>
        <td>${list[i].price}</td>
        <td>${list[i].disc}</td>
        <td><button onclick="updateData(${i});" class="btn btn-outline-success"> <i class="fa fa-solid fa-edit"></i>  </button></td>
        <td><button onclick="deleteData(${i});" class="btn btn-outline-danger"> <i class="fa-solid fa-trash-can"></i>  </button></td>
      </tr>`
    }

    document.getElementById('tableBody').innerHTML = tableDisplayProduct;
}


function clearData() {
    nameInput.value = '';
    categoryInput.value = '';
    priceInbut.value = '';
    discInput.value = '';
}

function deleteData(index) {
    productContainer.splice(index, 1);
    displayProduct(productContainer);
    localStorage.setItem("myData", JSON.stringify(productContainer));
}

function updateData(updateIndex) {

    nameInput.value = productContainer[updateIndex].pname;
    categoryInput.value = productContainer[updateIndex].catergory;
    priceInbut.value = productContainer[updateIndex].price;
    discInput.value = productContainer[updateIndex].disc;

    updateBtn.classList.replace('d-none', 'd-inline-block');
    btnCancel.classList.replace('d-none', 'd-inline-block');
    addBtn.classList.add('d-none');
    btnClear.classList.add('d-none');


    btnUpdate.onclick = function () {


        productContainer[updateIndex].pname = nameInput.value;
        productContainer[updateIndex].catergory = categoryInput.value;
        productContainer[updateIndex].price = priceInbut.value;
        productContainer[updateIndex].disc = discInput.value;
        displayProduct(productContainer);
        localStorage.setItem("myData", JSON.stringify(productContainer));
        clearData();

        updateBtn.classList.add('d-none');
        addBtn.classList.replace('d-none', 'd-inline-block');
        btnCancel.classList.replace('d-inline-block', 'd-none');
        btnClear.classList.replace('d-none', 'd-inline-block');
    }
}

btnCancel.onclick = function () {

    updateBtn.classList.add('d-none');
    addBtn.classList.replace('d-none', 'd-inline-block');
    btnCancel.classList.replace('d-inline-block', 'd-none');
    btnClear.classList.replace('d-none', 'd-inline-block');
    clearData();
}


function search() {
    var searchIndex = searchItem.value;
    var searchItems = [];
    for (var i = 0; i < productContainer.length; i++) {
        if ((productContainer[i].pname.toLowerCase().includes(searchIndex.toLowerCase())) || (productContainer[i].catergory.toLowerCase() == searchIndex.toLowerCase())) {
            searchItems.push(productContainer[i]);
            //searchItems[counter].pname = searchItems[counter].pname.replace(searchIndex , `<span class="bg-warning">${searchIndex}</span>`);
        }
    }
    displayProduct(searchItems);
}


searchItem.oninput = search;












// var str = "Today, is the greatest day ever!";
// arr = str.split(" ");

// var count = 0;
// var new_count = 0;
// var max_len = "-2";

// for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr[i].length; j++){
//         new_count = 0;
//         for(var k=j+1; k<arr[i].length; k++){
//             if(arr[i][j] == arr[i][k]){
//                 new_count ++;
//             }
//         }

//         if(new_count > count){
//             count = new_count;
//             max_len = arr[i];
//         }
//     }
// }


// console.log(max_len);
