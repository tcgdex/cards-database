import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "บิริริดามา",
		id: "Voltorb"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		th: "เคลื่อนที่โดยการกลิ้ง ถ้าพื้นไม่สม่ำเสมอจะตกใจจนระเบิด",
		id: "Karena Voltorb berpindah-pindah dengan bergelinding, Pokémon ini akan meledak karena guncangan ketika melewati tanah yang tidak rata."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ลูกกลมเจิดจ้า",
			id: "Bola Petir"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			th: "กลิ้ง",
			id: "Menggelinding"
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