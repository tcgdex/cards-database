import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Porygon",
		pt: "Porygon",
		fr: "Porygon",
		de: "Porygon"
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
				pt: "Conversion 1",
				fr: "Adaptation 1",
				de: "Umwandlung 1"
			},
			effect: {
				en: "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
				pt: "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
				fr: "Si le Pokémon Défenseur avait une Faiblesse, vous pouvez la changer pour le type de votre choix, excepté Incolore.",
				de: "Falls das verteidigende Pokémon eine Schwäche hat, kannst Du sie auf einen Typ deiner Wahl (außer Farblos) ändern."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Conversion 2",
				pt: "Conversion 2",
				fr: "Adaptation 2",
				de: "Umwandlung 2"
			},
			effect: {
				en: "Change Porygon's Resistance to a type of your choice other than Colorless.",
				pt: "Change Porygon's Resistance to a type of your choice other than Colorless.",
				fr: "Changez la Résistance de Porygon pour un type de votre choix, excepté Incolore.",
				de: "Ändere Porygons Resistenz auf einen Typ Deiner Wahl (außer Farblos)."
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
