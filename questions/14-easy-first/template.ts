// 解法1
// type First<T extends any[]> = T extends [] ? never : T[0]

// 解法2 infer 与元组
type First<T extends unknown[]> = T extends [infer F, ...infer R] ? F: never
