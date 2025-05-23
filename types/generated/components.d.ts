import type { Schema, Struct } from '@strapi/strapi';

export interface CartCartItem extends Struct.ComponentSchema {
  collectionName: 'components_cart_cart_items';
  info: {
    description: '';
    displayName: 'cart-item';
  };
  attributes: {
    image_URL: Schema.Attribute.String;
    max_stock: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    Product_id: Schema.Attribute.Integer;
    product_name: Schema.Attribute.String;
    quantity: Schema.Attribute.Integer;
    size_id: Schema.Attribute.Integer;
    size_name: Schema.Attribute.String;
  };
}

export interface ProductSizeOption extends Struct.ComponentSchema {
  collectionName: 'components_product_size_options';
  info: {
    description: '';
    displayName: 'SizeOption';
    icon: '';
  };
  attributes: {
    size: Schema.Attribute.Enumeration<
      [
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        's37',
        's38',
        's39',
        's40',
        's41',
        's42',
        's43',
        's44',
        's45',
      ]
    >;
    stock: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cart.cart-item': CartCartItem;
      'product.size-option': ProductSizeOption;
    }
  }
}
