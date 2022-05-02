function ExpenseDate(myprops) {
    return(
        <div>{myprops.date.toISOString()}</div>
    )
}

export default ExpenseDate;