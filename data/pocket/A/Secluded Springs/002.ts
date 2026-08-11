import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol"
	},

	illustrator: "Dsuke",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [188],
	hp: 60,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Hoppip"
	},

	description: {
		'en-us': "Skiploom enthusiasts can apparently tell where a\nSkiploom was born by the scent drifting from the\nflower on the Pokémon's head.",
		'fr-fr': "On dit que les personnes passionnées de Floravol peuvent déterminer son lieu de naissance rien qu'à l'odeur de la fleur sur sa tête."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bounce",
			'fr-fr': "Rebond"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card