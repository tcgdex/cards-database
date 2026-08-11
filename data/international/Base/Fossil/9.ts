import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Kabutops",
		'fr-fr': "Kabutops",
		'de-de': "Kabutops"
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
		'en-us': "Kabuto",
		'fr-fr': "Kabuto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Sharp Sickle",
				'fr-fr': "Lame-aiguisée",
				'de-de': "Scharfe Sichel"
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
				'en-us': "Absorb",
				'fr-fr': "Vol-vie",
				'de-de': "Absorber"
			},
			effect: {
				'en-us': "Remove a number of damage counters from Kabutops equal to half the damage done to Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Kabutops has fewer damage counters than that, remove all of them.",
				'fr-fr': "Retirez de Kabutops un nombre de marqueurs de dégâts égal à la moitié des dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance) (arrondis à la dizaine la plus proche.) Si le nombre de marqueurs sur Kabutops est inférieur à ce résultat, retirez-les tous.",
				'de-de': "Entferne von Kabutops Schadensmarke in Höhe der Hlftedes Schadens (auf die nächsten 10 aufgerundet), der dem verteidigenden Pokémon zugefügt wurde (nachdem Schwäche und Resistenz abgerechnet wurden). Falls Kabutops weniger Schadensmarken at, erntferne sie alle."
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
	retreat: 1,


	description: {
		'en-us': "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids.",
		'fr-fr': "Sa forme élancée lui permet de nager rapidement. Il lacère sa proie avant d'en absorber la vie."
	},


	variants: [
		{
			type: "holo",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273870,
				tcgplayer: 106525
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273870,
				tcgplayer: 106525
			}
		},
	]
}

export default card
