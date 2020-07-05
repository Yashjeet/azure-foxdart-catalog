module.exports = async function (context, req) {
    const { name, type } = req.body;
    try {
        const product = context.bindings.product = {
            name,
            type
        }
        context.res = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                message: "Successfully created product",
                entity: product
            }
        };
    }
    catch (error) {
        context.res = {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 400,
            body: {
                message: "Failed to create product"
            }
        }
    }
};