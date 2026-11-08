import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [846],

	name: {
		'en-us': "Arrokuda",
		'fr-fr': "Embrochet",
		'es-es': "Arrokuda",
		'it-it': "Arrokuda",
		'pt-br': "Arrokuda",
		'de-de': "Pikuda"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Water"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "If it sees any movement around it, this Pokémon charges for it straightaway, leading with its sharply pointed jaw. It's very proud of that jaw."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457698,
				tcgplayer: 213133
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457698,
				tcgplayer: 213133
			}
		},
	],
}

export default card
