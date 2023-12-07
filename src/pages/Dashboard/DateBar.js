const DateBar = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const weekday = new Date().getDay() - 1
    const today = new Date().getDate()
    console.log(today)
    return (
        <div className="DateBar">
            <div className="month">
                November
            </div>
            <div className="days">
                {days.map((day, i) => {
                    let difference = today + (i - weekday)
                    return (
                        <div className="day" key={i}>
                            {`${day}, ${difference}`}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DateBar