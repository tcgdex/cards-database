import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Heledelle",
		de: "Schwalboss"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mid-air Crush",
				fr: "Collision en plein vol",
				de: "Mid-air Crush"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If heads, your opponent discards 1 Energy card, if any, attached to that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Lancez une pièce. Si c'est face, votre adversaire défausse une carte Énergie attachée à ce Pokémon, s'il en a.",
				de: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't aply Weakness and Resistance for Benched Pokémon.) Flip a coin. If heads, your opponent dicards 1 Energy card, if any, attached to that Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nosedive",
				fr: "Descendre en piqué",
				de: "Nosedive"
			},
			effect: {
				en: "Flip a coin. If tails, Swellow does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Heledelle s'inflige 10 dégâts.",
				de: "Flip a coin. If tails, Swellow does 10 damage to itself."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 0,

	thirdParty: {
		tcgplayer: 89691,
		cardmarket: 276452
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
