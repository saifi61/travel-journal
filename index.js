let root = document.querySelector("#root");

let data = [
    {
        title: "Mount Fuji",
        location: "JAPAN",
        googleMapsUrl: "https://maps.app.goo.gl/S4Wf7Dy1YqYNZ5S1A",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "Rectangle 77.png"
    },
    {
        title: "Sydney Opera House",
        location: "AUSTRALIA",
        googleMapsUrl: "https://maps.app.goo.gl/pHTkrApYzn1KReGh7",
        startDate: "27 May, 2021",
        endDate: "8 Jun, 2021",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        imageUrl: "Rectangle 84.png"
    },
    {
        title: "Geiranger Fjord",
        location: "NORWAY",
        googleMapsUrl: "https://maps.app.goo.gl/3sA9DV9x4maaNGhC9",
        startDate: "01 Oct, 2021",
        endDate: "18 Nov, 2021",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        imageUrl: "Rectangle 78.png"
    }
]

function Navbar() {
    return (
        <nav className="nav">
            <img src="./images/Fill 213.png"></img>
            <div>my travel journal.</div>
        </nav>
    )
}

function Card(props) {
    return (
        <div className="card">
            <img src={`./images/${props.item.imageUrl}`} className="card--image"></img>
            <section className="card--info">
                <div className="card--location">
                    <img src="./images/Fill 219.png"></img>
                    <span>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <div className="card--date">{props.item.startDate} - {props.item.endDate}</div>
                <p className="card--summary">{props.item.description}</p>
            </section>
        </div>
    )
}

function App() {
    const cards = data.map((item) =>{
        return <Card item={item} />;
    });
    return(
        <div>
            <Navbar />
            <section className="card--container">
                {cards}
            </section>
        </div>
    )
}

ReactDOM.render(<App />, root);