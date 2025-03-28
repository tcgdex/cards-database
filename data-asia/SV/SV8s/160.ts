import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Scramble Switch",
		th: "สแครมเบิลสวิตช์"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		id: "Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan. Setelah itu, pilih sesukanya Energi yang dikenakan pada Pokémon yang ditukar masuk ke Cadangan, lalu pindahkan ke Pokémon Bertarung yang baru.",
		th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอนบนเบนช์ หลังจากนั้น เลือกพลังงานที่ติดอยู่กับโปเกมอนที่สลับมาอยู่บนเบนช์ตามจำนวนที่ชอบ ย้ายไปติดกับโปเกมอนใหม่บนตำแหน่งต่อสู้"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card