import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mankey"
	},

	description: {
		en: "It becomes wildly furious if it even senses\nsomeone looking at it. It chases anyone\nthat meets its glare.",
		fr: "Il devient fou furieux s'il se sent observé et pourchasse tout être qui croise son regard."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fight Back",
			fr: "Rendre les Coups"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "If this Pokémon has damage on it, this attack does 60 more damage.",
			fr: "Si ce Pokémon a subi des dégâts, cette attaque inflige 60 dégâts de plus."
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