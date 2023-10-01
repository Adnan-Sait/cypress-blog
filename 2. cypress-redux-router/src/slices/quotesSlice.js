/**
 * @typedef     {Object}    QuotesSource
 * @property    {Number}    id
 * @property    {String}    quote
 * @property    {String[]}  category
 * @property    {String}    author
 */

/**
 * @typedef     {Object}                    QuotesSlice
 * @property    {QuotesSource[]}            quotes
 * @property    {Map<String, Number[]>}     authors
 * @property    {Map<String, Number[]>}     categories
 */

const { createSlice } = require("@reduxjs/toolkit");

/**
 * @type {QuotesSlice}
 */
export const quotesInitialState = {
  quotes: [],
  authors: new Map(),
  categories: new Map(),
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState: quotesInitialState,
  reducers: {
    saveQuotes(state, action) {
      const { payload } = action;

      state.quotes = payload;
    },
  },
});

export default quotesSlice.reducer;
