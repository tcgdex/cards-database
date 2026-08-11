import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [57],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Mankey"
	},

	description: {
		'en-us': "It becomes wildly furious if it even senses\nsomeone looking at it. It chases anyone\nthat meets its glare.",
		'fr-fr': "Il devient fou furieux s'il se sent observé et pourchasse tout être qui croise son regard."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fight Back",
			'fr-fr': "Rendre les Coups"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"],

		effect: {
			'en-us': "If this Pokémon has damage on it, this attack does 60 more damage.",
			'fr-fr': "Si ce Pokémon a subi des dégâts, cette attaque inflige 60 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card