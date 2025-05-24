import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ชูวัลโก",
		id: "Escavalier"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		th: "ตั้งท่าถือหอกพร้อมบุกเข้าจู่โจมศัตรู ภาพวาดของการดวลกับ เนกิกะไนท์นั้นเป็นที่เลื่องชื่อ",
		id: "Escavalier memasang tombak dan menyerang musuh. Lukisan yang menggambarkan duel antara Pokémon ini dan Sirfetch'd terkenal."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "แทง",
			id: "Melubangi"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ไอออนบัสเตอร์",
			id: "Iron Buster"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 120,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card