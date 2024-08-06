let carrinhoI = document.querySelector('#carrinho_i')
let carrinho = document.querySelector('.carrinho')
let voltarCarrinho = document.querySelector('#voltar')

//abrir carrinho
carrinhoI.onclick = () => {
    carrinho.classList.add('active')
}

//fechar carrinho
voltarCarrinho.onclick = () => {
    carrinho.classList.remove('active')
}

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    //remover item do carringo
    var removeCartButtons = document.getElementsByClassName("remover-do-carrinho");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    // quantidade compra
    var quantityInputs = document.getElementsByClassName("quantidade-i");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChange);
    }
    //add ao carrinho
    var addCart = document.getElementsByClassName("add-card")
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i]
        button.addEventListener("click", addCartClicked);
    }
    //botao comprar
    document.getElementsByClassName("btn-comprar")[0].addEventListener("click", buyButtonClicked)
}

function buyButtonClicked(){
    alert("Sua compra foi feita")
    var cartContent = document.getElementsByClassName("contente-carrinho")[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    atualizarQuantidadeCarrinho();
    updatetotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChange(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatetotal();
}

function addCartClicked(event) {
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("titulo-produto")[0].innerText
    var price = shopProducts.getElementsByClassName("preco")[0].innerText
    var productImg = shopProducts.getElementsByClassName("imagem-produto")[0].src
    addProductToCart(title, price, productImg)
    alert("Você adicionou este item ao carrinho!");
    updatetotal();
}

function atualizarQuantidadeCarrinho() {
    var cartItems = document.getElementsByClassName("contente-carrinho")[0];
    var totalItens = 0;
    var caixasCarrinho = cartItems.getElementsByClassName("caixa-carrinho");

    for (var i = 0; i < caixasCarrinho.length; i++) {
        var quantityInput = caixasCarrinho[i].querySelector(".quantidade-i");
        totalItens += parseInt(quantityInput.value);
    }
    document.getElementById("total-quantidade").textContent = totalItens;
    updatetotal()
}

function addProductToCart(title, price, productImg) {
    var cartItems = document.getElementsByClassName("contente-carrinho")[0];
    var cartItemsNames = cartItems.getElementsByClassName("titulo-produto-carrinho");
    var itemExists = false;
    
    // Verifica se o item já está no carrinho
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].textContent.trim() === title.trim()) {
            var quantityInput = cartItemsNames[i].closest("caixa-carrinho").querySelector("quantidade-i");
            quantityInput.value = parseInt(quantityInput.value) + 1; // Incrementa a quantidade
            itemExists = true;
            break;
        }
    }

    if (!itemExists) {
        // Cria um novo item no carrinho
        var cartShopBox = document.createElement("div");
        cartShopBox.classList.add("caixa-carrinho");
        
        var cartBoxContent = `
            <img style="width: 70px;" src="${productImg}" alt="" class="imagem-carrinho">
            <div class="detalhes-caixa">
                <div class="titulo-produto-carrinho">${title}</div>
                <div class="preco-no-carrinho">${price}</div>
                <input type="number" value="1" class="quantidade-i">
            </div>
            <!--remover-->
            <i class="bi bi-trash3-fill remover-do-carrinho"></i>`;
        cartShopBox.innerHTML = cartBoxContent;
        
        cartItems.append(cartShopBox);
        
        cartShopBox.getElementsByClassName("remover-do-carrinho")[0].addEventListener("click", removeCartItem);
        cartShopBox.getElementsByClassName("quantidade-i")[0].addEventListener("change", quantityChange);
    }

    atualizarQuantidadeCarrinho();
}

function removeCartItem(event) {
    var item = event.target.closest('.caixa-carrinho');
    if (item) {
        item.remove();
        atualizarQuantidadeCarrinho();
    }
}

function quantityChange(event) {
    atualizarQuantidadeCarrinho();
}

//atualizacao do total
function updatetotal() {
    var cartContent = document.getElementsByClassName("contente-carrinho")[0]
    var cartBoxes = cartContent.getElementsByClassName("caixa-carrinho")
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName("preco-no-carrinho ")[0]
        var quantityElement = cartBox.getElementsByClassName("quantidade-i")[0]
        var price = parseFloat(priceElement.innerText.replace("R$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        //numero quebrado
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("valor-total")[0].innerText = "R$" + total;
    
}