import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [246],

	name: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},

	illustrator: "Sanosuke Sakuma",
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
				'en-us': "Sand Spray",
				'fr-fr': "Jet Sableux",
				'es-es': "Rociado de Arena",
				'it-it': "Silicospruzzo",
				'pt-br': "Spray de Areia",
				'de-de': "Sandspray"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
				'es-es': "Perforar",
				'it-it': "Perforare",
				'pt-br': "Perfurar",
				'de-de': "Durchbohren"
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
		'en-us': "Born deep underground, it comes aboveground and becomes a pupa once it has finished eating the surrounding soil."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483309,
				tcgplayer: 219474
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483309,
				tcgplayer: 219474
			}
		},
	],
}

export default card
