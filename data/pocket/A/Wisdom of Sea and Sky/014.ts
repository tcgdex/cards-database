import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [188],
	hp: 70,
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
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card