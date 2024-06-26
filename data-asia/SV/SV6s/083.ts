import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Girafarig"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		id: "Terdapat kepala kecil di ekor Girafarig. Bagian ini memiliki insting untuk menggigit musuh yang mendekat dari belakang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Yang Mana Pun Kepala"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan sejumlah 10 kepada 1 Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card