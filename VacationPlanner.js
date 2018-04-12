function VacationPlanner (city,days,miles,season) {
    this.dailyCosts = 500;
    this.flightCostPerMile = 3;
    this.city = city,
    this.days = days,
    this.miles = miles,
    this.season = season,
    this.totalCost += 0,
    function calculateTotalCost(){
        var cost = this.totalCost;
        cost += (days * this.dailyCosts) + (miles * this.flightCostPerMile) * season;
        return cost;
    },
    function printInfo(){
        calculateTotalCost();
        console.log(city);
        console.log(this.totalCost)
    }


}







// = calculateTotalCost(){
// this.totalCost = 0;