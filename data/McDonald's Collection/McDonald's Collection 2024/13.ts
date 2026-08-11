import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
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
				en: "Continuous Steps",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage for each heads."
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

