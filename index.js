// Function 1 - distanceFromHqInBlocks
function distanceFromHqInBlocks (blocks) {
    if (blocks > 42) {
        return blocks - 42
    } else {
       return 42 - blocks
    }
}

// Function 2 - distanceFromHqInFeet
function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}

// Function 3 - distanceTravelledInFeet
function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
}

// Function 4 - calculatesFarePrice
function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet (start, destination)
    if (distance <= 400) {
        return 0
    }
    if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    }
    if (distance > 2000, distance < 2500) {
        return 25
    }
    if (distance > 2500) {
        return 'cannot travel that far'
    }
}