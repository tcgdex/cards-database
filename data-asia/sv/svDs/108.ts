import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เมลเมทัลex",
		id: "Melmetal ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			th: "ดูดซับโลหะ",
			id: "Mengisap Logam"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[โลหะ]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Logam} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		},

		cost: ["Metal"]
	}, {
		name: {
			th: "ฟูลเมทัลนักเคิล",
			id: "Full Metal Knuckle"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[โลหะ]ที่ติดอยู่กับโปเกมอนนี้ x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi {Logam} yang dikenakan pada Pokémon ini."
		},

		damage: "90+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card