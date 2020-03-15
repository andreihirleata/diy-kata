const reachDestination = (distance, speed) => {
  if (typeof distance === `number` && typeof speed === `number`) {
    // Math.ceil(num / increment) * increment; - rounds to the nearest increment
    const eta = distance / speed;
    const roundedEta = Math.ceil(eta / 0.5) * 0.5;
    return `I should be there in ${roundedEta} hours`;
  }
  return "Input is not a number";
};

module.exports = reachDestination;
