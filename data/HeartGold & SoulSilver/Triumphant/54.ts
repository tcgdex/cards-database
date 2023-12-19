import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Yanmega",
		fr: "Yanmega",
		de: "Yanmega"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Shoot Through",
				fr: "Passer à travers",
				de: "Durchschießen"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "U-turn",
				fr: "Demi-Tour",
				de: "Kehrtwende"
			},
			effect: {
				en: "Switch Yanmega with 1 of your Benched Pokémon.",
				fr: "Échangez Yanmega avec l’un de vos Pokémon de Banc.",
				de: "Tausche Yanmega gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 50,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The beat of its wings is so powerful that it accidentally dislodges full-grown trees when it takes off in flight."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
