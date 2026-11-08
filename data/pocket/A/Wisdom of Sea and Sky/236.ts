import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pachirisu ex",
		'fr-fr': "Pachirisu-ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [417],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Sparking Gadget",
			'fr-fr': "Gadget'incelles"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"],

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card