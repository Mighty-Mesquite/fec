import React from 'react';
import PreviewImage from './PreviewImage.jsx';
import ProductInformation from './ProductInformation.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const ProductCard = (props) => {
    return (
        <div className={styles.productCard}>
          <a>
            <PreviewImage relatedItem={props.relatedItem} currentItem={props.currentItem}/>
            <ProductInformation relatedItem={props.relatedItem} currentItem={props.currentItem}/>
          </a>
        </div>
    )
}

export default ProductCard;