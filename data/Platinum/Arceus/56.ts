import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Burmy Plant Cloak",
		de: "Burmy Pflanzenumhang"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		412,
	],
	
	hp: 40,

	types: [
		"Grass",
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
				en: "Burmy Plant Cloak can evolve during the turn you play it.",
				de: "Burmy Pflanzenumhang kann in dem Zug entwickelt werden, in dem du es gespielt hast."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
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

	thirdParty: {
		cardmarket: 278928,
		tcgplayer: 84051
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
