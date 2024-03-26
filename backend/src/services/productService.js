// services/product/productService.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createProduct(name) {
  return prisma.product.create({
    data: {
      name,
    },
  });
}

async function getAllProducts() {
  return prisma.product.findMany();
}

async function getProductById(id) {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
}

async function updateProduct(id, name) {
  return prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
}

async function deleteProduct(id) {
  return prisma.product.delete({
    where: {
      id,
    },
  });
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};