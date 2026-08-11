import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แรบบิฟุต"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'th-th': "ภาคภูมิใจในท่าเตะที่หลากหลายของตน แต่ท่าพุ่งหัวชนด้วยหน้าผากที่ร้อนขึ้นด้วยเปลวเพลิงก็ทรงพลังเช่นกัน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "เตะต่ำ"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'th-th': "เผาไหม้"
		},

		damage: 60,
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