import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Crush",
				fr: "Ecras'queue"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage; if tails, this attack does 30 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires ; si c'est pile cette attaque inflige 30 dégâts."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	description: {
		fr: "Son corps a été compressé à une profondeur incroyable. Il en résulte qu'il est plus dur que le diamant."
	}
}

export default card
