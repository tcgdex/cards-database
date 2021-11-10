import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Conversion 1",
				fr: "Adaptation 1"
			},
			effect: {
				en: "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
				fr: "Si le Pokémon Défenseur avait une Faiblesse, vous pouvez la changer pour le type de votre choix, excepté Incolore."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Conversion 2",
				fr: "Adaptation 2"
			},
			effect: {
				en: "Change Porygon's Resistance to a type of your choice other than Colorless.",
				fr: "Changez la Résistance de Porygon pour un type de votre choix, excepté Incolore."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Un Pokémon fait de programmes et d'algorithmes. Il peut survivre en milieu virtuel."
	}
}

export default card
