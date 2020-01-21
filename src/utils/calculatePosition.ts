function calculatePosition(i: number): string {
    switch (i) {
        case 0:
            return "1, 1"
        case 1:
            return "2, 1"
        case 2:
            return "3, 1"
        case 3:
            return "1, 2"
        case 4:
            return "2, 2"
        case 5:
            return "3, 2"
        case 6:
            return "1, 3"
        case 7:
            return "2, 3"
        case 8:
            return "3, 3"
        default:
            // Should never hit this block if called from Game.handleClick
            throw new RangeError(`Index "i" is not within the range [0, 8] (was ${i})`)
    }
}

export default calculatePosition
