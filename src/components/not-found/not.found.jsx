import './not.found.css';

const NotFound = () => {
    return (
        <div className="not-found-wrapper innerContentScale">
            <img src="./img/not-found.png" alt="Not found" />
            <p className="not-found-descr">
                Ooops! Couldn't find such location :\
            </p>
        </div>
    )
}

export default NotFound;