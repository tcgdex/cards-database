import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Kabuto",
		de: "Kabuto"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		140,
	],
	
	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Dome Fossil",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fast Evolution",
				de: "Schnelle Evolution"
			},
			effect: {
				en: "Search your deck for up to 2 Evolution cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				de: "Durchsuche dein Deck nach bis zu 2 Evolutionskarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Speed Attack",
				de: "Tempoangriff"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278876,
		tcgplayer: 86387
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
