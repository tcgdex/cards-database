import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		de: "Rasaff"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf drei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt, 20 Schadenspunkte zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Tantrum",
				fr: "Mauvaise humeur",
				de: "Trotzanfall"
			},
			effect: {
				en: "Flip a coin. If tails, Primeape is now Confused (after doing damage).",
				fr: "Lancez une pièce. Si c'est pile, Colossinge est maintenant Confus (après le calcul des dégâts).",
				de: "Wirf eine Münze. Bei 'Zahl' ist Rasaff jetzt verwirrt (nach der Schadensverteilung)."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Agressif et teigneux, il poursuit son gibier jusqu'à épuisement complet."
	},

	thirdParty: {
		cardmarket: 273840,
		tcgplayer: 45146
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	],
}

export default card
