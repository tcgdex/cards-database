import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [109],

	name: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Suffocating Gas",
				'fr-fr': "Gaz Suffocant",
				'es-es': "Gas Sofocante",
				'it-it': "Gas Soffocante",
				'pt-br': "Gás Asfixiante",
				'de-de': "Würgegas"
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
	hp: 70,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457968,
				tcgplayer: 213204
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457968,
				tcgplayer: 213204
			}
		},
	],
}

export default card
