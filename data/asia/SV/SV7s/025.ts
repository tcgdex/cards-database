import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แรบบิฟุต",
		'id-id': "Raboot"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'th-th': "ภาคภูมิใจในท่าเตะที่หลากหลายของตน แต่ท่าพุ่งหัวชนด้วยหน้าผากที่ร้อนขึ้นด้วยเปลวเพลิงก็ทรงพลังเช่นกัน",
		'id-id': "Jurus tendangan Raboot yang beragam adalah kebanggaannya, tetapi tandukan kepala yang dilancarkan dengan kening yang menjadi panas oleh apinya juga dahsyat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "เตะต่ำ",
			'id-id': "Low Kick"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'th-th': "เผาไหม้",
			'id-id': "Lidah Api"
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