import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "พารัส",
		id: "Paras"
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		th: "ขุดรูเพื่อเอาสารอาหารจากรากของต้นไม้ แต่สารอาหารแทบทั้งหมด จะถูกเห็ดบนหลังช่วงชิงไป",
		id: "Ia menggali lubang untuk mendapatkan nutrisi dari akar pohon, tetapi sebagian besar nutrisi tersebut direbut oleh jamur di punggungnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ดูดเลือด",
			id: "Mengisap Darah"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนนี้ ตามจำนวนแดเมจที่ทำกับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้าม",
			id: "Pulihkan HP Pokémon ini sejumlah kerusakan yang diberikan kepada Pokémon Bertarung lawan."
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card