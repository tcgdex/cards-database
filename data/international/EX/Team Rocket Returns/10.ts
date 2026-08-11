import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Steelix",
		'de-de': "Dunkles Stahlos"
	},

	illustrator: "Kyoko Koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 110,

	types: [
		"Metal",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Link",
				'de-de': "Energy Link"
			},
			effect: {
				'en-us': "Search your discard pile for an Energy card and attach it to Dark Steelix.",
				'de-de': "Search your discard pile for an Energy card and attack it to Dark Steelix."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'de-de': "Heavy Impact"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 4,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276302,
				tcgplayer: 84658
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276302,
				tcgplayer: 84658
			},
		},
	],

}

export default card
