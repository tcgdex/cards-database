import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Larvesta",
		'th-th': "เมลาร์วา"
	},

	illustrator: "MARINA Chikazawa",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'id-id': "Zaman dahulu kala, orang-orang memuja Larvesta sebagai utusan matahari, tetapi ia dibenci karena sering menyebabkan kebakaran gunung.",
		'th-th': "ในอดีตเคยถูกเคารพบูชาในฐานะบริวารของพระอาทิตย์ แต่เพราะ ชอบทำให้เกิดไฟป่าอยู่บ่อย ๆ เลยถูกเกลียดชังด้วยเช่นกัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menyeruduk",
			'th-th': "กระแทก"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Memuntahkan Api",
			'th-th': "พ่นอัคคี"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card