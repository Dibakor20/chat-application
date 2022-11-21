import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/ApiSlice";
import authSliceReducer from "../features/auth/AuthSlice";
import conversationsSliceReducer from "../features/conversations/ConversationSlice";
import messagesSliceReducer from "../features/messages/MessagesSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    conversations: conversationsSliceReducer,
    messages: messagesSliceReducer,
  },
  // devTools: !process.env.NODE_ENV === "production"
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
});
