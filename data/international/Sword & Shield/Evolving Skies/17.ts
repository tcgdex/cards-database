import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Miki Tanaka",

	attacks: [{
		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'pt-br': "Rollout",
			'de-de': "Walzer"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "As soon as it's born, it burrows into an apple. Not only does the apple serve as its food source, but the flavor of the fruit determines its evolution."
	},

	dexId: [840],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574041,
				tcgplayer: 246832
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574041,
				tcgplayer: 246832
			}
		},
	],
}

export default card
