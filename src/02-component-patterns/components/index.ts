import { ProductCard as ProductCardHOC } from '../components/ProductCard';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImg } from '../components/ProductImg';
import { ProductTitle } from '../components/ProductTitle';

export { ProductImg } from '../components/ProductImg';
export { ProductButtons } from '../components/ProductButtons';
export { ProductTitle } from '../components/ProductTitle';

export const ProductCard = Object.assign(ProductCardHOC, {
    Image : ProductImg,
    Title: ProductTitle,
    Buttons: ProductButtons    
})


export default ProductCard;