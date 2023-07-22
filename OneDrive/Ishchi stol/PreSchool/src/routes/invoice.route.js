const {Router} = require("express");
const { getAll, create, put, _delete, genOne, updateStatus, pagination, categories } = require("../controllers/invoice.controller");
const fileUpload = require("../middlewares/fileUpload");


const router = Router();

router.get("/invoices", getAll);
router.get("/invoice/:id", genOne);
router.post("/invoice", fileUpload, create);
router.put("/invoice/:id", fileUpload, put);
router.put("/invoiceStatus/:id", updateStatus);
router.delete("/invoice/:id",  _delete);
router.get("/invoicePagination", pagination);
router.get("/invoices/categories", categories);

module.exports = router;