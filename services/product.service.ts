import IProduct from "@/types/IProduct.type"
import axiosApp from "../utils/axiosConfig"

export default new class ProductService {
    getAll() {
        return axiosApp.get<IProduct>(
            "/products/1",
        )
    }
}