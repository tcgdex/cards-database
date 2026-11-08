import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [501],

	name: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'es-es': "Oshawott",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'de-de': "Ottaro"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d'Água",
				'de-de': "Aquaknarre"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Seashell Attack",
				'fr-fr': "Carap'Attaque",
				'es-es': "Conchaataque",
				'it-it': "Conchigliata",
				'pt-br': "Ataque de Concha do Mar",
				'de-de': "Seemuschelangriff"
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
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511585,
				tcgplayer: 226412
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511585,
				tcgplayer: 226412
			}
		},
	],
}

export default card
