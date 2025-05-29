import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Jynx"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "Its strange cries sound like human language.\nThere are some musicians who compose songs\nfor Jynx to sing."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychic"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card