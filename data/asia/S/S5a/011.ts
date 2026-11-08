import { Card } from "models/database/card"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪瑙水母",
		'th-th': "เมโนคุราเกะ"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "身體的９９％是水分。剩下的１％之中包含了用來製造毒素的器官。",
		'th-th': "ร่างกาย 99 เปอร์เซ็นต์เป็นน้ำ อีก 1 เปอร์เซ็นต์ที่เหลือเป็นอวัยวะสร้างสารพิษ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "重摑",
			'th-th': "ตบแรง"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card