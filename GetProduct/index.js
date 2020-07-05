module.exports = async function (context, req) {

    const product = context.bindings.product;
    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            message: "Successfully get product",
            entity: product
        }
    };
};