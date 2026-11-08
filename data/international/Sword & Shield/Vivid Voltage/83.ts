import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [194],

	name: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'es-es': "Wooper",
		'it-it': "Wooper",
		'pt-br': "Wooper",
		'de-de': "Felino"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mud Shot",
				'fr-fr': "Tir de Boue",
				'es-es': "Disparo Lodo",
				'it-it': "Colpodifango",
				'pt-br': "Tiro de Lama",
				'de-de': "Lehmschuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'es-es': "Toque",
				'it-it': "Battuta",
				'pt-br': "Pulso",
				'de-de': "Verprügler"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "This Pokémon lives in cold water. It will leave the water to search for food when it gets cold outside."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511835,
				tcgplayer: 226491
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511835,
				tcgplayer: 226491
			}
		},
	],
}

export default card
