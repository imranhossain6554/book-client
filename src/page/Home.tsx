/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { Link } from "react-router-dom";
import { useGetDataQuery } from "../redux/api/apiSlice";
const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error, isLoading } = useGetDataQuery("example");
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map(
              (product: {
                gener:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                author:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                publicationDate:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                _id: any;
              }) => (
                <a href="#" className="group bg-gray-500">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    {product.gener}
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product?.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product?.author}
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product?.publicationDate}
                  </p>
                  <Link
                    to={`/book-details/${product._id}`}
                    className="rounded-full bg-yellow-300"
                  >
                    Details
                  </Link>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
