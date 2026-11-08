import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lead",
				'fr-fr': "Mentor",
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Lancez une pièce. Si c’est face, cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras’Face",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They're popular, but they're rare. Trainers who show them off recklessly may be targeted by thieves.",
	},

	thirdParty: {
		cardmarket: 394597,
		tcgplayer: 197682
	}
}

export default card
