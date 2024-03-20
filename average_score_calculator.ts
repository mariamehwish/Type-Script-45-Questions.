function averageScore(...scores: number[]): number {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

console.log(averageScore(50,80,95,100));