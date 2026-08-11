import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon"
	},

	illustrator: "5ban Graphics",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [662],
	hp: 70,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Fletchling"
	},

	description: {
		'en-us': "Fletchinder scatters embers in tall grass\nwhere bug Pokémon might be hiding and\nthen catches them as they come leaping out.",
		'fr-fr': "Il disperse des étincelles dans les hautes herbes qui pourraient abriter des Pokémon Insecte et attrape ceux qui en sortent pour s'enfuir."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fire Wing",
			'fr-fr': "Aile de Feu"
		},

		damage: 40,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card