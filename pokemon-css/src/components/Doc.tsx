import "./Doc.css";
export const Doc = () => {
    return (
        <div className="doc-container" id="doc">
            <div className="doc-title">
                <h1>Documentation</h1>
                <br />
            </div>
            <div className="doc-content">
                <p>
                    This documentation will help you get familiar with the resources of the Rick and Morty API and show you how to make different queries, so that you can get the most out of it.
                    The API provides access to a wide range of data, including characters, locations, and episodes from the Rick and Morty universe.
                    Each resource is accessible through specific endpoints, and the API is designed to be easy to use and integrate into your projects.
                </p>
                <br />
                <p>
                    The API will automatically paginate the responses, meaning that if a resource contains a large amount of data, it will be split into multiple pages.
                    You will receive up to 20 documents per page, and you can navigate through the pages using the `info` object in the response, which includes `next` and `prev` URLs for easy navigation.
                </p>
                <br />
                <p>
                    To get started, you can make a simple HTTP GET request to the API's base URL. For example, fetching all characters can be done by querying the `/character` endpoint.
                    You can also filter the results by adding query parameters such as `name`, `status`, or `species` to refine your search.
                </p>
                <br />
                <p>
                    The API supports both synchronous and asynchronous requests, making it flexible for different use cases.
                    Whether you're building a web application, a mobile app, or just experimenting with the data, the Rick and Morty API is a powerful tool to explore.
                </p>
                <br />
            </div>
            <div className="doc-code">
                <pre>
                    <code>
                        {`fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data));`}
                    </code>
                </pre>
            </div>
        </div>
    );
}