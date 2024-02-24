// JSON SERVER
// json server is an npm package that lets you create fake REST APIs with zero coding
//as front end developer, i constantly need mock data that i can use to quickly prototype front end components
//data should be fetch and the APIs should support not just GET but also POST<PUT and DELETE request

// set procedure of json server
// first step create the package.json file for that file open the db.json file terminal and do the commit "npm init -y " after default create the package file
//step two install the json server package open the terminal and do the commit of 'yarn add json-server or npm install -g json-server'
//third step add a new script to start the server add this line "serve-json":"json-server --watch db.json" after  continues watch the db.json file and serve the latest data

//after run the json server to commit the 'json-server--watch db.json' in terminal

// GET request

//After run the json server we got the both links based on create the data.
//http: //localhost:3000/products
//http: //localhost:3000/reviews

//Use the those URLs to GET the particular unic id data
//like example:
//http://localhost:3000/reviews/1(id)
//http://localhost:3000/reviews/2(id)

// Filtering

//Filtering mean to filter the data what ever we want.

//like example:
//http://localhost:3000/products?category=electronics
//http://localhost:3000/reviews?rating=3

//http://localhost:3000/products?category=books&discount.type=shipping(if incase filter the object inside object)

// Sorting
//To sort the data based on the prices

//like example:
//http://localhost:3000/products?_sort=price (accending order low to high)

//http://localhost:3000/products?_sort=price&_order=desc(descending order)

//http://localhost:3000/products?_sort=price,caterory&_order=desc,asc(multipule soet items)

//Pagination
//It means divided the content into saparate pages and based on the content to the page size to improve the readability and organiation of information.

//like example:
//http://localhost:3000/products?_page=1(single page)

//http://localhost:3000/products?_page=1&_limit=2( page size=2 and page=1 )

//http://localhost:3000/products?_page=3&_limit=3

//Operators
//Those operators are to pull the data based on the min range to max range of the prices like

//http://localhost:3000/products?price_gte=2000&price_lte=6000
//gte=greater then lte= less then

//Third operator
//http://localhost:3000/products?id_ne=1
//ne=not equal

//like operator based on serach first latter of the particular object key
//http://localhost:3000/products?title_like=^p

//Full text search
//To search the based on the text to filter the json data

//like example:
//http://localhost:3000/products?q=text
//q= quary perameter

//Relationships
//In data base data have the interlink the produts and reviews

//like example:
//http://localhost:3000/products?_embed=reviews(we got products and related those reviews perent child relation like)

//http://localhost:3000/products/1?_embed=reviews(This is like child resource)

//http://localhost:3000/reviews/1?_expand=product(This is perent resource)



