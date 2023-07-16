/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useParams } from "react-router-dom";
import {
  useDeleteProductMutation,
  useSingleProductQuery,
} from "../redux/api/apiSlice";
const ProductDetails = () => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useSingleProductQuery(id);
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const handleDelete = () => {
    if (product && product.data) {
      deleteProduct(product.data._id)
        .unwrap()
        .then(() => {
          // Handle success if needed
        })
        .catch((error) => {
          // Handle error if needed
        });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <p> {product?.data?.author}</p>
          <p>{product?.data?.title} </p>
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.data?.genre}</h1>
          <p className="text-xl">
            publicationDate: {product?.data?.publicationDate}
          </p>

          <button className="m-4" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
