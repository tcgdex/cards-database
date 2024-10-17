import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ลาพลาซex",
		id: "Lapras ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			th: "พาวเวอร์สแปลช",
			id: "Power Splash"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ x40",
			id: "Serangan ini memberikan kerusakan sejumlah 40 untuk tiap Energi yang dikenakan pada Pokémon ini."
		},

		damage: "40×",
		cost: ["Water"]
	}, {
		name: {
			th: "ลาริมาร์เรน",
			id: "Larimar Rain"
		},

		effect: {
			th: "ดูการ์ด 20 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานจากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
			id: "Lihat 20 kartu dari atas Deck sendiri, pilih sesukanya Energi di antaranya, lalu kenakan sesukanya pada Pokémon sendiri. Kocok kembali sisa kartu ke Deck."
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