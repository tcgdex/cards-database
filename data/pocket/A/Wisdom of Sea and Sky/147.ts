import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stantler",
		'fr-fr': "Cerfrousse"
	},

	illustrator: "sui",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [234],
	hp: 80,
	types: ["Colorless"],

	description: {
		'en-us': "This Pokémon apparently used to live in much\nharsher environments, and thus it once had\nstronger psychic powers than it does now.",
		'fr-fr': "Il paraît qu'autrefois, il était doté de plus grands pouvoirs psychiques, car il vivait dans un environnement hostile."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Enhanced Horns",
			'fr-fr': "Cornes Améliorées"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card