import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape"
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
		en: "It becomes wildly furious if it even senses\nsomeone looking at it. It chases anyone\nthat meets its glare."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fight Back"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "If this Pokémon has damage on it, this attack does 60 more damage."
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