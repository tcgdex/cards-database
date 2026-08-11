import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cramorant"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'id-id': "Pokémon yang sama sekali tidak pandai. Energi yang akan dipakai otaknya dibatasi sesedikit mungkin dan sisanya dialihkan untuk bertarung."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Pistol Air"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Spit Shoot"
		},

		effect: {
			'id-id': "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan sejumlah 120 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card