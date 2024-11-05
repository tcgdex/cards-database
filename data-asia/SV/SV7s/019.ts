import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เดลวิล",
		id: "Houndour"
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		th: "ชนิดของเสียงร้องที่ใช้ตอนสื่อสารกับฝูงกับตอนไล่ต้อนเหยื่อจะแตกต่างกัน",
		id: "Jenis raungan Houndour ketika berkomunikasi dengan sesamanya atau ketika memburu mangsanya berbeda-beda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แทะ",
			id: "Menggerogot"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "เตะกลับหลัง",
			id: "Tendangan Belakang"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card