import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [623],

	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'pt-br': "Golett",
		'de-de': "Golbit"
	},

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dynamic Chop",
				'fr-fr': "Coupe Dynamique",
				'es-es': "Golpe Dinámico",
				'it-it': "Dinamicolpo",
				'pt-br': "Golpe Dinâmico",
				'de-de': "Wuchthieb"
			},

			damage: 80,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Golurk Hammer",
				'fr-fr': "Maillet Golemastoc",
				'es-es': "Martillo Golurk",
				'it-it': "Martello Golurk",
				'pt-br': "Martelo Golurk",
				'de-de': "Golgantes-Hammer"
			},

			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Artillery platforms built into the walls of ancient castles served as perches from which Golurk could fire energy beams."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483264,
				tcgplayer: 219459
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483264,
				tcgplayer: 219459
			}
		},
	],
}

export default card
