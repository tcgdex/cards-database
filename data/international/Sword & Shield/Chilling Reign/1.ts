import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [13],
	set: Set,

	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'es-es': "Weedle",
		'it-it': "Weedle",
		'pt-br': "Weedle",
		'de-de': "Hornliu"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567081,
				tcgplayer: 241648
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567081,
				tcgplayer: 241648
			}
		},
	],
}

export default card
