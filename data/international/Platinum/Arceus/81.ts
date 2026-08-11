import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Wingull",
		'de-de': "Wingull"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [278],
	
	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'de-de': "Regenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It soars high in the sky, riding on updrafts like a glider. It carries food tucked in its bill."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90611,
				cardmarket: 278952
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278952,
				tcgplayer: 90611
			}
		},
	],

}

export default card
