import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [679],

	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Slicing Blade",
				'fr-fr': "Lame Tranchante",
				'es-es': "Cuchilla Cortante",
				'it-it': "Affettalama",
				'pt-br': "Lâmina Fatiante",
				'de-de': "Schwertschneide"
			},

			damage: 30,

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

	retreat: 1,
	hp: 60,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Honedge's soul once belonged to a person who was killed a long time ago by the sword that makes up Honedge's body."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458063,
				tcgplayer: 213229
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458063,
				tcgplayer: 213229
			}
		},
	],
}

export default card
