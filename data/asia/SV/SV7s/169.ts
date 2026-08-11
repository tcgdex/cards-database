import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คาปู บูลูลู"
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		th: "ถอนต้นไม้ใหญ่ขึ้นมาเหวี่ยงไปรอบ ๆ ทำให้ต้นไม้ใบหญ้าเจริญเติบโต แล้วดูดซับพลังงานนั้น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "วู้ดแฮมเมอร์"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย"
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