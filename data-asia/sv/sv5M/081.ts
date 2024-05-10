import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄坦",
		th: "เมลตัน"
	},

	illustrator: "Masa",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		'zh-tw': "會溶解金屬然後吃掉。透過讓液體金屬在體內 循環來製造能量。",
		th: "หลอมละลายโลหะแล้วกินเข้าไป ทำให้โลหะเหลวไหลเวียนไปทั่วร่างเพื่อสร้างพลังงานภายในร่างกาย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘",
			th: "พุ่งหัวชน"
		},

		damage: 50,
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card