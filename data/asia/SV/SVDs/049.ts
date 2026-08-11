import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มารุมายน์",
		'id-id': "Electrode"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'th-th': "ยิ่งสะสมพลังงานไฟฟ้ามากเท่าไหร่ยิ่งเคลื่อนไหวได้เร็ว แต่ก็จะระเบิดง่ายขึ้นด้วย",
		'id-id': "Makin banyak energi listrik yang disimpan, Electrode dapat bergerak dengan kecepatan tinggi. Namun, Pokémon ini juga menjadi lebih mudah untuk meledak."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ลูกกลมเจิดจ้า",
			'id-id': "Bola Petir"
		},

		damage: 60,
		cost: ["Lightning"]
	}, {
		name: {
			'th-th': "กลิ้งโจมตี",
			'id-id': "Tubrukan Menggelinding"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card