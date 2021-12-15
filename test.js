// import bcrypt from "bcrypt"

// const plainPW = "1234"

// console.time("bcrypt")
// const hash = bcrypt.hashSync(plainPW, 10) // 2^11
// console.log(hash)
// console.timeEnd("bcrypt")

// const isEqual = bcrypt.compareSync(plainPW, hash)

// console.log(isEqual)

import jwt from "jsonwebtoken"

const token = jwt.sign({ _id: "o1j23oj12oi3j2o1j3o21" }, "process.env.JWT_SECRET", { expiresIn: "12s" })

console.log(token)
try {
  const verified = jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJvMWoyM29qMTJvaTNqMm8xajNvMjEiLCJpYXQiOjE2Mjk4Nzk0MTUsImV4cCI6MTYyOTg3OTQyN30.hNmvhAUMrvzAKkEwOxttjImJCZdIE_GubiHysHYsjIk",
    "process.env.JWT_SECRET"
  )

  console.log(verified)
} catch (error) {
  console.log(error)
}
