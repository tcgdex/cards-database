import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ยันชัม",
		id: "Pancham"
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		th: "จ้องมองคู่ต่อสู้อยู่ตลอดเพื่อไม่ให้คู่ต่อสู้ดูหมิ่น แต่พอรู้สึกผ่อนคลายลง ก็จะยิ้มออกมา",
		id: "Pancham selalu memelototi lawan agar tidak diremehkan, tetapi saat tidak fokus, tanpa sadar ekspresi wajahnya berubah menjadi tersenyum."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ต่อยตี",
			id: "Menohok"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ฮึดสู้",
			id: "Tusukan Tenaga Dalam"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
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