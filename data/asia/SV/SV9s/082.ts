import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โจโรเนโกะ <ของแมรี>",
		'id-id': "Purrloin <Marnie>"
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'th-th': "ทำให้ฝ่ายตรงข้ามเผลอเข้ามาชื่นชมความน่ารักของมัน แล้วใช้เล็บ ข่วนโดยไม่ทันให้ตั้งตัวและหัวเราะเยาะใส่",
		'id-id': "Dengan tingkahnya yang imut, Purrloin membuat lawannya lengah. Saat lawan menghampirinya, Pokémon ini mencakar lawan dengan cakarnya yang tajam dan menertawakannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ชาร์ปเนล",
			'id-id': "Sharp Nail"
		},

		effect: {
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】] การโจมตีนี้จะ เพิ่มแดเมจอีก 40",
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {ex}, kerusakan yang diberikan bertambah sejumlah 40."
		},

		damage: "20+",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card