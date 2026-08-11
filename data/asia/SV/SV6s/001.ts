import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Tangela"
	},
	rarity: 'Common',

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		id: "Hingga saat ini, wujud asli Tangela di balik jalar yang terus tumbuh tanpa batas walau dicabut ini masih belum terungkap."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menepuk"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Pukulan Sulur"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
