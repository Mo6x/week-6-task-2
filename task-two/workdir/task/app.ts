interface Output {
  boarded: {
    name: string;
    location: string;
  }[];
  reservation: {
    name: string;
    location: string;
  }[];
  count: number;
}
const taskOne = (passengers: number, shuffle: number): Output => {
  //complete your work here
  if (passengers < 0 || shuffle < 0) throw new Error('Invalid input');
  const locations = ['Abuja', 'Benue', 'Lagos', 'Katsina', 'Sambisa'];
  const outputData: Output = {
    boarded: [],
    reservation: [],
    count: 0,
  };
  // // At first instance, we push all the passengers to the reservation array
  // for (let i = 0; i < passengers; i++) {
  //   outputData.reservation.push({
  //     name: `Passenger ${i + 1}`,
  //     location: locations[i % locations.length],
  //   });
  // }
  let loc = 0;
  let pass = 1;
  for (let i = 0; i < passengers; i++) {
    const name = `passenger${pass++}`;
    if (loc === 5) loc = 0;
    const location = locations[loc++];
    outputData.reservation.push({ name, location });
  }
  // Count is the number of trips we can go
  let count = shuffle + 1;
  while (passengers > 4 && count) {
    if (passengers > 4 && passengers < 50) {
      const conveyable = Math.trunc(passengers / 5) * 5;
      outputData.boarded = outputData.reservation.splice(0, conveyable);
      passengers -= conveyable;
      count--;
      outputData.count++;
    } else if (passengers >= 50) {
      outputData.boarded = outputData.reservation.splice(0, 50);
      passengers -= 50;
      outputData.count++;
      count--;
    }
  }
  return outputData;
};
export default taskOne;
