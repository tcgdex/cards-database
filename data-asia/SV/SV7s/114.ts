import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ดิวรัลดอน",
		id: "Duraludon"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		th: "ร่างกายที่เป็นโลหะนั้นทนทานมาก แต่เก็บความร้อน มันจึงต้องระบายความร้อนออกมาทางร่องที่หาง",
		id: "Tubuh logamnya kokoh, tetapi panas cenderung menumpuk sehingga ia selalu mengeluarkan panas dari celah ekornya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ตบหนัก",
			id: "Hantaman Penuh Tenaga"
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			th: "เรจจิงแฮมเมอร์",
			id: "Raging Hammer"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "80+",
		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "H"
}

export default card