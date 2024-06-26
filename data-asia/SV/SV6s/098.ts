import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Sandslash"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		id: "Durinya adalah kulitnya yang mengeras. Ia membulatkan tubuhnya dan menyerang dengan menusuk lawannya menggunakan duri-durinya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Memasang Cakar"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Gempa"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 10 kepada semua Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 120,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card