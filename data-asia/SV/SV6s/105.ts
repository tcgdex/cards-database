import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Conkeldurr"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		id: "Conkeldurr menguasai teknik mengayun-ayunkan beton tanpa mengandalkan tenaga dengan memanfaatkan kekuatan sentrifugal secara mahir."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Mengamuk"
		},

		effect: {
			id: "Ubah kondisi Pokémon ini menjadi Pusing."
		},

		damage: 80,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Guts Swing"
		},

		effect: {
			id: "Jika Pokémon ini mengalami Kondisi Khusus, serangan ini dapat digunakan meskipun Pokémon ini tidak mengenakan Energi yang dibutuhkan untuk menggunakan serangan ini."
		},

		damage: 250,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card