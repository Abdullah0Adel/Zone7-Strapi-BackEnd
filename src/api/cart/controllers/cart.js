// // src/api/cart/controllers/cart.js

// module.exports = {
//     async getMyCart(ctx) {
//       try {
//         // Log debug information
//         console.log('getMyCart called');
//         console.log('User:', ctx.state.user ? ctx.state.user.id : 'No user');
        
//         if (!ctx.state.user) {
//           return ctx.unauthorized('You must be logged in');
//         }
        
//         const user = ctx.state.user;
        
//         // Find cart for the current user
//         const cart = await strapi.db.query('api::cart.cart').findOne({
//           where: { user: user.id },
//           populate: ['user']
//         });
        
//         console.log('Found cart:', cart ? 'Yes' : 'No');
        
//         if (!cart) {
//           // Create a new cart if one doesn't exist
//           const newCart = await strapi.entityService.create('api::cart.cart', {
//             data: {
//               user: user.id,
//               items: []
//             }
//           });
          
//           return { data: newCart };
//         }
        
//         return { data: cart };
//       } catch (error) {
//         console.error('Error in getMyCart:', error);
//         return ctx.badRequest('Error fetching cart');
//       }
//     },
    
//     async updateMyCart(ctx) {
//       try {
//         // Log debug information
//         console.log('updateMyCart called');
//         console.log('User:', ctx.state.user ? ctx.state.user.id : 'No user');
//         console.log('Request body:', ctx.request.body);
        
//         if (!ctx.state.user) {
//           return ctx.unauthorized('You must be logged in');
//         }
        
//         const user = ctx.state.user;
//         const { items } = ctx.request.body;
        
//         if (!items) {
//           return ctx.badRequest('Items are required');
//         }
        
//         // Find the user's cart
//         let cart = await strapi.db.query('api::cart.cart').findOne({
//           where: { user: user.id }
//         });
        
//         console.log('Found cart:', cart ? 'Yes' : 'No');
        
//         if (!cart) {
//           // Create a new cart if one doesn't exist
//           cart = await strapi.entityService.create('api::cart.cart', {
//             data: {
//               user: user.id,
//               items: items
//             }
//           });
//         } else {
//           // Update existing cart
//           cart = await strapi.entityService.update('api::cart.cart', cart.id, {
//             data: {
//               items: items
//             }
//           });
//         }
        
//         return { data: cart };
//       } catch (error) {
//         console.error('Error in updateMyCart:', error);
//         return ctx.badRequest('Error updating cart');
//       }
//     }
//   };