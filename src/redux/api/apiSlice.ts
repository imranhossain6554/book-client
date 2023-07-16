import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = createApi({
  reducerPath: "",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-server-one.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    // Define your API endpoints here
    getData: builder.query<any, string>({
      query: (param) => `/books`,
    }),
    singleProduct: builder.query({
      query: (id) => `/books/${id}`,
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    updateProduct: builder.mutation<void, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetDataQuery,
  useSingleProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = api;
export default api;
