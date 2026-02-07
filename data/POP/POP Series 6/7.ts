import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Gible",
		fr: "Gible"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		443,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Surprise Attack",
				fr: "Attaque surprise"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet."
			},

			damage: 30
		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 277892,
		tcgplayer: 85699
	}
}

export default card
