import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Piplup"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Peck",
				fr: "Picpic"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Splash",
				fr: "Éclaboussure"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	description: {
		en: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold."
	},

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 277900,
		tcgplayer: 88143
	}
}

export default card
