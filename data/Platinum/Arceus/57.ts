import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Burmy Sandy Cloak",
		de: "Burmy Sandumhang"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [412],
	
	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cloak Evolution",
				de: "Umhang-Evolution"
			},
			effect: {
				en: "Burmy Sandy Cloak can evolve during the turn you play it.",
				de: "Burmy Sandumhang kann in dem Zug entwickelt werden, in dem du es gespielt hast."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Tackle",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "Even if it is born where there are no cocooning materials, it somehow always ends up with a cloak."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84055,
				cardmarket: 278929
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278929,
				tcgplayer: 84055
			}
		},
	],

}

export default card
