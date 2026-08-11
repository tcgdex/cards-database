import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'es-es': "Spheal",
		'it-it': "Spheal",
		'pt-br': "Spheal",
		'de-de': "Seemops"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		363,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Unstoppable Roll",
				'fr-fr': "Roulade Obstinée",
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, this attack does 30 more damage.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It rolls across ice floes to reach shore because its body is poorly shaped for swimming.",
	},

	thirdParty: {
		cardmarket: 280468,
		tcgplayer: 89450
	}
}

export default card
