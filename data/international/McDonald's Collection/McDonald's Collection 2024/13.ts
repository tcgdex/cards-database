import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	illustrator: "0313",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 60,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Continuous Steps",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage for each heads."
			},
			damage: "30x",
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802835,
				tcgplayer: 614382
			}
		},
	]
}

export default card

