module.exports = async function (context, req) {

    const products =  context.bindings.products;
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: products
    };
};