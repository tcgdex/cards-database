import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แอร์มุโด",
		'id-id': "Skarmory"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'th-th': "เพราะมีการนำขนที่ร่วงออกมาทำเป็นดาบ จึงได้รับความนิยมสูงในการนำมาทำเป็นแบบของตราประจำตระกูล",
		'id-id': "Bulu rontok Skarmory dapat dibuat menjadi pedang, sehingga Pokémon ini populer sebagai desain lambang kebesaran."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "จิก",
			'id-id': "Mematuk"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "สตีลสแลช",
			'id-id': "Steel Slash"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [สตีลสแลช] ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Steel Slash."
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card