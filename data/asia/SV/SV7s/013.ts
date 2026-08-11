import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คาปู บูลูลู",
		'id-id': "Tapu Bulu"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'th-th': "ถอนต้นไม้ใหญ่ขึ้นมาเหวี่ยงไปรอบ ๆ ทำให้ต้นไม้ใบหญ้าเจริญเติบโต แล้วดูดซับพลังงานนั้น",
		'id-id': "Tapu Bulu mencabut pohon besar lalu mengayun-ayunkannya dengan kencang. Ia membuat tanaman tumbuh dengan lebat lalu mengisap energi tersebut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "วู้ดแฮมเมอร์",
			'id-id': "Wood Hammer"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 220,
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card