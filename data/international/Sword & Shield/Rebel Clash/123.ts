import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Impidimp",
		'fr-fr': "Grimalin",
		'es-es': "Impidimp",
		'it-it': "Impidimp",
		'pt-br': "Impidimp",
		'de-de': "Bähmon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [859],
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'es-es': "Toque",
				'it-it': "Battuta",
				'pt-br': "Pulso",
				'de-de': "Verprügler"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Stampede",
				'fr-fr': "Ruée",
				'es-es': "Estampida",
				'it-it': "Fuggi Fuggi",
				'pt-br': "Estouro",
				'de-de': "Zertrampeln"
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
	hp: 70,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Through its nose, it sucks in the emanations produced by people and Pokémon when they feel annoyed. It thrives off this negative energy."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458013,
				tcgplayer: 213219
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458013,
				tcgplayer: 213219
			}
		},
	],
}

export default card
