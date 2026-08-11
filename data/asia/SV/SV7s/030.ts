import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คิงดราex",
		'id-id': "Kingdra ex"
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "โองการแห่งราชันย์",
			'id-id': "Komando Raja"
		},

		effect: {
			'th-th': "เลือกการ์ดโปเกมอน[น้ำ]ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา วางบนเบนช์",
			'id-id': "Pilih paling banyak 3 lembar Pokémon {Air} dari Trash sendiri, lalu masukkan ke Cadangan."
		},

		cost: ["Water"]
	}, {
		name: {
			'th-th': "ไฮโดรปั๊มพ์",
			'id-id': "Pompa Air"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนนี้ x50",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Energi {Air} yang dikenakan pada Pokémon ini."
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