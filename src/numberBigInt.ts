const num1: number = 23.0 
const num2: number = 0x78cf 
const num3: number = 0o577 
const num4: number = 0b110001 

console.log({
    num1, num2, num3, num4
})

const big1: bigint = 900799254740991n 
const big2: bigint = 0b10000000000000000000000000000000000011n 
const big3: bigint = 0x200000000000003n 
const big4: bigint = 0o400000000000000000003n 

console.log({
    big1, big2, big3, big4
})
