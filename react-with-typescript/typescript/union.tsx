type Status = "success" | "error" | "loading"; // 유니온 타입 가능!
type User2 = { name: string } | { age: number }; // 유니온 타입 가능!