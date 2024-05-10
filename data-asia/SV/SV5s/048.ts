import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Raichu"
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		id: "Kedua telinga Raichu akan berdiri tegak jika kantong listrik di pipinya terisi penuh."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Voltase Melibatkan"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 50 kepada semua Pokémon kedua pemain yang memiliki Token Kerusakan selain Pokémon ini. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			id: "Lightning Ball"
		},

		damage: 120,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card