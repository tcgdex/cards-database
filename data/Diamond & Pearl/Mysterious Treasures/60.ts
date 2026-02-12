import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson",
		de: "Igelavar"
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
		fr: "Héricendre"
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
				fr: "Feux d'artifice",
				de: "Feuerwerk"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Quilava.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Feurisson.",
				de: "Wirf 1 Münze. Bei \"Zahl\" lege 1 an Igelavar angelegte -Energie auf deinen Ablagestapel."
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
	},

	thirdParty: {
		cardmarket: 277689,
		tcgplayer: 88485
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
