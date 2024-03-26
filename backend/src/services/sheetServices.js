const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProducts = async () => {
    try {
        return prisma.product.findMany();
    } catch (error) {
        throw new Error(`Error in getProducts: ${error.message}`);
    }
}

const getProductById = async (id) => {
    try {
        return prisma.product.findUnique({
            where: {
                id: Number(id),
            },
        });
    } catch (error) {
        throw new Error(`Error in getProductById: ${error.message}`);
    }
}

const createProduct = async (name) => {
    try {
        return prisma.product.create({
            data: {
                name: name,
            },
        });
    } catch (error) {
        throw new Error(`Error in createProduct: ${error.message}`);
    }
}

const updateProduct = async (id, name) => {
    try {
        return prisma.product.update({
            where: {
                id: Number(id),
            },
            data: {
                name: name,
            },
        });
    } catch (error) {
        throw new Error(`Error in updateProduct: ${error.message}`);
    }
}

const deleteProduct = async (id) => {
    try {
        return prisma.product.delete({
            where: {
                id: Number(id),
            },
        });
    } catch (error) {
        throw new Error(`Error in deleteProduct: ${error.message}`);
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
