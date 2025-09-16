import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Kabutops",
		fr: "Kabutops",
		de: "Kabutops"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Kabuto",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Sharp Sickle",
				fr: "Lame-aiguisée",
				de: "Scharfe Sichel"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Absorb",
				fr: "Vol-vie",
				de: "Absorber"
			},
			effect: {
				en: "Remove a number of damage counters from Kabutops equal to half the damage done to Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Kabutops has fewer damage counters than that, remove all of them.",
				fr: "Retirez de Kabutops un nombre de marqueurs de dégâts égal à la moitié des dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance) (arrondis à la dizaine la plus proche.) Si le nombre de marqueurs sur Kabutops est inférieur à ce résultat, retirez-les tous.",
				de: "Entferne von Kabutops Schadensmarke in Höhe der Hlftedes Schadens (auf die nächsten 10 aufgerundet), der dem verteidigenden Pokémon zugefügt wurde (nachdem Schwäche und Resistenz abgerechnet wurden). Falls Kabutops weniger Schadensmarken at, erntferne sie alle."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Sa forme élancée lui permet de nager rapidement. Il lacère sa proie avant d'en absorber la vie."
	},

	thirdParty: {
		cardmarket: 273870,
		tcgplayer: 44432
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
