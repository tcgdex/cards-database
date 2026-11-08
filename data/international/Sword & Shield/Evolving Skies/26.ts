import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
		'es-es': "Tentacool",
		'it-it': "Tentacool",
		'pt-br': "Tentacool",
		'de-de': "Tentacha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	illustrator: "SATOSHI NAKAI",

	attacks: [{
		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Gentle Slap",
			'de-de': "Sanfter Hieb"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "Its body is 99% water. The remaining 1% contains the organ that makes its poison."
	},

	dexId: [72],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574050,
				tcgplayer: 246819
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574050,
				tcgplayer: 246819
			}
		},
	],
}

export default card
