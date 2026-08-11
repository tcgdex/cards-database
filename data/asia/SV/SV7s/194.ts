import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คิงดราex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			th: "โองการแห่งราชันย์"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอน[น้ำ]ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา วางบนเบนช์"
		},

		cost: ["Water"]
	}, {
		name: {
			th: "ไฮโดรปั๊มพ์"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนนี้ x50"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card