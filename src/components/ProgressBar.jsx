


export function ProgressBar({ percentages }){
    return (<>
        <div className="container">
            <p>Cat - 01</p>
            <div className="progress">
                <div className="progress-bar c-1" style={{ width : percentages.cat1 }} >{percentages.cat1}</div>
            </div>

            <p>Cat - 02</p>
            <div className="progress">
                <div className="progress-bar c-2" style={{ width : percentages.cat2}} >{percentages.cat2}</div>
            </div>

            <p>Cat - 03</p>
            <div className="progress">
                <div className="progress-bar c-3" style={{ width : percentages.cat3}} >{percentages.cat3}</div>
            </div>

            <p>Cat - 04</p>
            <div className="progress">
                <div className="progress-bar c-4" style={{ width : percentages.cat4}} >{percentages.cat4}</div>
            </div>
      </div>
    </>)
}