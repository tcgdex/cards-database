import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โซรัว"
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'th-th': "แปลงกายเป็นคนหรือโปเกมอนตัวอื่น ซ่อนตัวตนที่แท้จริงเพื่อปกป้องตัวเองจากอันตราย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เหยียบ"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ข่วนทวีคูณ"
		},

		effect: {
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20"
		},

		damage: "20×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card