import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เมแทงก์",
		'id-id': "Metang"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'th-th': "ดันบัล 2 ตัวเชื่อมต่อตัวเข้าด้วยกัน ด้วยเนื้อเยื่อสมอง 2 ก้อนที่ เชื่อมกันทำให้พลังจิตนั้นแข็งแกร่งขึ้นกว่าเดิม",
		'id-id': "Dua Beldum telah menyatu. Karena 2 otaknya telah terhubung, kekuatan psikokinesisnya menjadi lebih kuat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ไซโคพันช์",
			'id-id': "Pukulan Psikis"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "โขกหัวพลังจิต",
			'id-id': "Sundulan Spiritual"
		},

		damage: 50,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card