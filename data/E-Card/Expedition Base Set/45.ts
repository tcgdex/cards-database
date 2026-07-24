import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Bellsprout",
		fr: "Rapasdepic",
		de: "Ibitak"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [69],

	hp: 50,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blot",
				fr: "Serre",
				de: "Greifer"
			},
			effect: {
				en: "Remove 1 damage counter from Bellsprout.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Supersonic Flight",
				fr: "Vol supersonique",
				de: "Superschallflug"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85396,
				cardmarket: 274886
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
