import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ยันชัม",
		'id-id': "Pancham"
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'th-th': "จ้องมองคู่ต่อสู้อยู่ตลอดเพื่อไม่ให้คู่ต่อสู้ดูหมิ่น แต่พอรู้สึกผ่อนคลายลง ก็จะยิ้มออกมา",
		'id-id': "Pancham selalu memelototi lawan agar tidak diremehkan, tetapi saat tidak fokus, tanpa sadar ekspresi wajahnya berubah menjadi tersenyum."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ต่อยตี",
			'id-id': "Menohok"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ฮึดสู้",
			'id-id': "Tusukan Tenaga Dalam"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card