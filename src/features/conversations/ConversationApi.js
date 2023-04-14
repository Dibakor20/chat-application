import { apiSlice } from "../api/apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoints here  
        getConversations: builder.query({
            query: (email) =>
                `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
        }),
    }),
})

export const {useGetConversationsQuery} = conversationApi