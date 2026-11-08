import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ชาเรมex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "กดจุดลมปราณ"
		},

		effect: {
			'th-th': "วางตัวนับแดเมจให้ HP ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเหลือเท่ากับ [50]"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "ลูกเตะโยคะ"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้นี้จะไม่นำจุดอ่อนและความต้านทานมาคิด"
		},

		damage: 190,
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