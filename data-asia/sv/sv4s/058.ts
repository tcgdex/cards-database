import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Yamask"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Arwah orang purba menjadi Pokémon ini. Yamask gentayangan di peninggalan kuno untuk mencari orang yang mengenali wajahnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mata Pembawa Sial"
		},

		effect: {
			id: "Letakkan 3 Token Kerusakan pada 1 Pokémon lawan."
		},

		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card