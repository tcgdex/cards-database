import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'de-de': "Bummelz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [287],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lazy Punch",
				'fr-fr': "Ramollo-poing",
				'de-de': "Müder Schlag"
			},
			effect: {
				'en-us': "Slakoth can't attack during your next turn.",
				'fr-fr': "Parecool ne peut pas attaquer lors de votre prochain tour.",
				'de-de': "Bummelz kann in deinem nächsten Zug nicht angreifen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275857,
				tcgplayer: 89294
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275857,
				tcgplayer: 89294
			}
		},
	],

}

export default card
