const main =document.getElementById('main')
const cart =main
                .firstElementChild
                .firstElementChild
                .nextElementSibling;

const products = Array.from(main
                .firstElementChild
                .firstElementChild
                .firstElementChild
                .nextElementSibling
                .children);
                

products.forEach((product) =>{
    product.addEventListener('click', () =>{
        //create new cart card
        const div = document.createElement('div');
        const productName = document.createElement('h6');
        const price = document.createElement('small');

        productName.innerText = product
                            .firstElementChild 
                            .innerText
                            
        div.classList.add('flex')
        console.log(product
                    .firstElementChild 
                    .innerText)

        div.classList.add('bg-blue-500', 'rounded-xl', 'p-2', 'm-2');
        div.append(productName);
        console.log('div')

        cart.append(div);
    })
})

//console.log(products)