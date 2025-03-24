let units = 500;
let amount = 0;
// Calculate the amount for the first 100 units
if (units <= 100) {
    amount = units * 0.6;
    } else if (units <= 300) {
        // Calculate the amount for the first 100 units
        amount += 100 * 0.6;
        // Calculate the amount for the next 200 units
        amount += (units - 100) * 0.8;
        } else {
            // Calculate the amount for the first 100 units
            amount += 100 * 0.6;
            // Calculate the amount for the next 200 units
            amount += 200 * 0.8;
            // Calculate the amount for the units beyond 300
            amount += (units - 300) * 0.9;
            }
            
            amount += 50;
            
            if (amount > 300) {
                
                let surcharge = amount * 0.15;
                
                amount += surcharge;
                }
                console.log("Total amount: Rs. " + amount.toFixed(2));