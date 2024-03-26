const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createProduct(name) {
    return await prisma.product.create({
        data: {
            name: name
        }
    });
}

async function getProduct(id) {
    return await prisma.product.findUnique({
        where: {
            id: id
        },
        select: {
            name: true
        }
    });
}

async function updateProduct(id, newName) {
    return await prisma.product.update({
        where: {
            id: id
        },
        data: {
            name: newName
        }
    });
}

async function deleteProduct(id) {
    return await prisma.product.delete({
        where: {
            id: id
        }
    });
}

module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
};