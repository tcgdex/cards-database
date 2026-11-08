import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skarmory ex",
		'fr-fr': "Airmure-ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [227],
	hp: 140,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Steel Wing",
			'fr-fr': "Ailes d'Acier"
		},

		damage: 70,
		cost: ["Metal", "Metal"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card