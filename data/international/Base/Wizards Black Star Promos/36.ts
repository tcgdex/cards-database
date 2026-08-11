import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Igglybuff",
		'fr-fr': "Toudoudou"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		174,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Good Night Song",
				'fr-fr': "Chanson du Marchand de sable"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
	],

	description: {
		'en-us': "Its extremely flexible and elastic body makes it bounce continuously—anytime, anywhere.",
		'fr-fr': "Son corps extrêmement flexible et élastique le fait rebondir continuellement ─ tout le temps, et dans toutes les directions."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86259
			},
		}
	]
}

export default card
