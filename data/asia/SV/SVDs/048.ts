import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บิริริดามา",
		'id-id': "Voltorb"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'th-th': "เคลื่อนที่โดยการกลิ้ง ถ้าพื้นไม่สม่ำเสมอจะตกใจจนระเบิด",
		'id-id': "Karena Voltorb berpindah-pindah dengan bergelinding, Pokémon ini akan meledak karena guncangan ketika melewati tanah yang tidak rata."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ลูกกลมเจิดจ้า",
			'id-id': "Bola Petir"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			'th-th': "กลิ้ง",
			'id-id': "Menggelinding"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card