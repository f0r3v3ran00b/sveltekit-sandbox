export const load = () => {

    const getQuote = async () => {
        //const response = await fetch(`/api/random-quote`)
        const response = await fetch(`https://api.quotable.io/random`)
        const data = response.json()
        console.log(`Data - ${data}`)
        return data
    }

    return {
        quote: getQuote()
    }

}