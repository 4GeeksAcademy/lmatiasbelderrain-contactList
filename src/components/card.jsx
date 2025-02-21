import rigobaby from "../assets/img/rigo-baby.jpg"
export const Card = ({id,name,address,phone,email}) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={rigobaby} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{name}</h1>
                        <p className="card-text">Address: {address}</p>
                        <p className="card-text">Phone: {phone}</p>
                        <p className="card-text">E-Mail: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}