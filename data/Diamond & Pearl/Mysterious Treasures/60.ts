import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		156,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Cyndaquil",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fireworks",
				fr: "Feux d'artifice"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Quilava.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Feurisson."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	description: {
		fr: "La chaleur de ses flammes intimide l'ennemi. Elles s'intensifient lorsqu'il se prépare à combattre."
	}
}

export default card
