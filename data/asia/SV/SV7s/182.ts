import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อาซานัน"
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'th-th': "นั่งสมาธิเพื่อขัดเกลาพลังจิตให้เพิ่มขึ้นและลอยขึ้นกลางอากาศ จะกินผลไม้แค่ 1 ผลต่อวัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เข้าฌาน"
		},

		effect: {
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [20]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "สับ"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card