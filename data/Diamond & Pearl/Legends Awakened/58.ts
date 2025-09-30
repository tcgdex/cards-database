import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Lampi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strong Current",
				fr: "Courant fort",
				de: "Starke Strömung"
			},
			effect: {
				en: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
				fr: "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
				de: "Entferne 1 an das Verteidigende Pokémon angelegte Energiekarte und lege sie an 1 anderes Pokémon deines Gegners an."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "La lumière de LANTURN surgit des profondeurs. On le surnomme \"étoile des profondeurs\"."
	},

	thirdParty: {
		cardmarket: 278207,
		tcgplayer: 86608
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
