import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Knuckle Punch",
				'fr-fr': "Coud'Phalange",
				'es-es': "Puño con Nudillos",
				'it-it': "Nocca-Pugno",
				'pt-br': "Soco com Punho",
				'de-de': "Knöchelhieb"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It hefts a Graveler repeatedly to strengthen its entire body. It uses every type of martial arts.",
	},

	thirdParty: {
		cardmarket: 281708,
		tcgplayer: 92221
	}
}

export default card
