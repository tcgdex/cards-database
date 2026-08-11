import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "โฮเกเตอร์",
		id: "Fuecoco"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		th: "นอนเกลือกกลิ้งอยู่บนหินอุ่น สร้างพลังงานไฟด้วยความร้อนที่ดูดซับเข้ามาด้วยเกล็ดสี่เหลี่ยม",
		id: "Fuecoco berbaring di atas batu hangat dan menciptakan energi api dengan menyerap energi panas tersebut menggunakan sisik perseginya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เชื้อไฟ",
			id: "Nyala Api"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			th: "กระแทก",
			id: "Menyeruduk"
		},

		damage: 30,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card