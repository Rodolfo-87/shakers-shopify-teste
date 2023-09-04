const arrayProducts = document.querySelector('.lookbook-data').dataset.lookbook.replace('[', '').replace(']', '').replace(/(?:\.|"|[0-9])*/g,'').split(',');

const custom = {
    formatReal: function( value ){
        var tmp = value+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
    },
    getProducts: async function ( url, index ){
        const response = await fetch( url );
        const data = await response.json();
    
        if( response.status === 200 ) custom.appendHTML( data, index );
        else return false;
    },
    getHandle: function(){
        arrayProducts.map( ( item, index )=>{
            custom.getProducts(`/products/${item}.js`, index);            
        } )
    },
    appendHTML: function( data, index ){
        let productId = data.id;
        let variantId = data.variants[0].id;
        let price = data.price;
        let featureImage = data.featured_image;
        let title = data.title;

        const elementLookbook = document.querySelector('.lookbook-product');

        elementLookbook.innerHTML += `
            <div id="lookbook-${index+1}" class="lookbook-product__item" data-productid=${productId}>
                <figure class="lookbook-product__figure">
                    <img class="lookbook-product__image" src="${featureImage}" alt="${title}">
                    <figcaption>${title}</figcaption>
                </figure>  
                <div class="lookbook-product__info">
                    <span class="lookbook-product__price"> R$ ${custom.formatReal(price)} </span>
                    <a 
                        data-variantid=${variantId}
                        class="lookbook-product__add"
                        href="/cart/add?id=${variantId}&quantity=1"                        
                    >
                        Adicionar ao carrinho
                    </a>
                </div>               
            </div>
        `;  
    },
    init: function(){
        custom.getHandle();
    }
}

if( arrayProducts !== '' && window.location.pathname.indexOf('/') !== -1 ){
    custom.getHandle();
    
    const lookbookLinksProduct = document.querySelectorAll('.lookbook-dots-product li');
    lookbookLinksProduct.forEach( ( link )=>{
        link.addEventListener('click', function(){ 
            let allLinks = Array.from( link.closest('.lookbook-dots-product').children );
            allLinks.forEach( ( el ) => el.classList.remove('is-active') );
            link.classList.add('is-active');
        })
    } )
    
    const lookbookLinksImage = document.querySelectorAll('.lookbook-dots-image li');
    lookbookLinksImage.forEach( ( link )=>{
        link.addEventListener('click', function( { target } ){
            let classProductName = target.classList[0];
            let classProductLink = document.querySelector('.' + classProductName + '-product').closest('li');
    
            lookbookLinksProduct.forEach( ( link )=>{
                link.classList.remove('is-active');
            } )        
    
            classProductLink.classList.add('is-active');
    
            let allLinks = Array.from( link.closest('.lookbook-dots-image').children );
            allLinks.forEach( ( el ) => el.classList.remove('is-active') );
            link.classList.add('is-active');
        })
    } )
}




