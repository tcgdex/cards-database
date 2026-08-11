import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ลาพลาซex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			th: "พาวเวอร์สแปลช"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ x40"
		},

		damage: "40×",
		cost: ["Water"]
	}, {
		name: {
			th: "ลาริมาร์เรน"
		},

		effect: {
			th: "ดูการ์ด 20 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานจากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ"
		},

		cost: ["Water", "Psychic", "Metal"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card