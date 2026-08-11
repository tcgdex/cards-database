import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'es-es': "Axew",
		'it-it': "Axew",
		'pt-br': "Axew",
		'de-de': "Milza"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		610,
	],

	hp: 50,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Strong Bond",
				'fr-fr': "Attachement Profond",
			},
			effect: {
				'en-us': "Search your deck for a Supporter card named Iris, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Supporter nommée Iris dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its large tusks have a tendency to break, but each time they grow back, they grow in harder and sturdier.",
	},

	thirdParty: {
		cardmarket: 281088,
		tcgplayer: 83672
	}
}

export default card
