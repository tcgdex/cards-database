import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraistre",
		de: "Morlord"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		195,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
		de: "Felino"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surfer"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				de: "Erdbeben"
			},
			effect: {
				en: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Fügt jedem Pokémon auf deiner eigenen Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "Due to its relaxed and carefree attitude, it often bumps its head on boulders and boat hulls as it swims.",
		fr: "Comme il est très insouciant et peu attentif, il se cogne souvent dans les rochers ou les quilles des bateaux lorsqu'il nage.",
		de: "Aufgrund seiner entspannten und unbesorgten Einstellung stößt es beim Schwimmen mit dem Kopf oft an Felsen und Bootskörper an."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274445,
				tcgplayer: 88468
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274445,
				tcgplayer: 88468
			}
		}
	]
}

export default card
