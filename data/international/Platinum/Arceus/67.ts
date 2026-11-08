import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Kabuto",
		'de-de': "Kabuto"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [140],
	
	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Dome Fossil"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fast Evolution",
				'de-de': "Schnelle Evolution"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Evolution cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Evolutionskarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Speed Attack",
				'de-de': "Tempoangriff"
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

	description: {
		'en-us': "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86387,
				cardmarket: 278876
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278876,
				tcgplayer: 86387
			}
		},
	],

}

export default card
