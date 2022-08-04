export let vipArr = [
    {
        name: "Bill Gates",
        worth: "$90B",
        birth_year: "1955",
        source:"microsoft",
        country:"USA",
        image: "https://www.ted.com/speakers/bill_gates",

    },
    {
        name: "Warren Buffett",
        worth: "$84B",
        birth_year: "1931",
        source:"Berkshire Hathaway",
        country:"USA",
        image: "https://www.britannica.com/topic/Berkshire-Hathaway"

    },
    {
        
        name: "Mark Tzukerberg",
        worth: "$71B",
        birth_year: "1931",
        source:"Berkshire Hathaway",
        country:"USA",
        image: "https://www.bbc.com/news/technology-48472408"

    },
    {
        name: "Mark Tzukerberg",
        worth: "$71B",
        birth_year: "1931",
        source:"Berkshire Hathaway",
        country:"USA",
        image: "https://www.britannica.com/topic/Berkshire-Hathaway"
    },
    {
        name: "Mark Tzukerberg",
        worth: "$71B",
        birth_year: "1931",
        source:"Berkshire Hathaway",
        country:"USA",
        image: "https://www.britannica.com/topic/Berkshire-Hathaway"
    }
];


export const ChangeColor=() => {
    let r = Math.floor((Math.random()*256));
    let g = Math.floor((Math.random()*256));
    let b = Math.floor((Math.random()*256));
    let a = Math.random();

    return `rgba(${r}.${g},${b},${a})`;
};