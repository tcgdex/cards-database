import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Emolga"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		id: "Emolga terbang bagaikan menari di langit sambil memancarkan listrik. Imut, tetapi merepotkan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Sky Wave"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 10 kepada semua Pokémon Cadangan kedua pemain. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card