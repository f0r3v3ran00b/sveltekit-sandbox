const fetch = require('node-fetch');

console.log(`Hey`)

async function getQuote() {
  const quoteData = await fetch(`https://api.quotable.io/random`);
  console.log(`QuoteData = ${JSON.stringify(quoteData)}`)
  return quoteData
}

(async function main() {
  let quoteData = await getQuote()
})();