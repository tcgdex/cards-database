import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tadbulb"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'id-id': "Tadbulb menghasilkan listrik dengan menggoyangkan ekornya. Ketika merasakan adanya bahaya, Pokémon ini memberitahukan sesamanya dengan mengedipkan cahaya kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Pelepasan Listrik Goyang-goyang"
		},

		effect: {
			'id-id': "Serangan ini juga memberikan kerusakan sejumlah 10 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card