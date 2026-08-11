import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "พารัส",
		'id-id': "Paras"
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'th-th': "ขุดรูเพื่อเอาสารอาหารจากรากของต้นไม้ แต่สารอาหารแทบทั้งหมด จะถูกเห็ดบนหลังช่วงชิงไป",
		'id-id': "Ia menggali lubang untuk mendapatkan nutrisi dari akar pohon, tetapi sebagian besar nutrisi tersebut direbut oleh jamur di punggungnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ดูดเลือด",
			'id-id': "Mengisap Darah"
		},

		effect: {
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ ตามจำนวนแดเมจที่ทำกับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้าม",
			'id-id': "Pulihkan HP Pokémon ini sejumlah kerusakan yang diberikan kepada Pokémon Bertarung lawan."
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