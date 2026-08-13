import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		it: "Primeape",
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
		fr: "Férosinge",
		it: "Mankey",
		de: "Menki"
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
				it: "Sfuriate",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				it: "Lancia 3 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				de: "Wirf drei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze „Kopf“ zeigt, 20 Schadenspunkte zu."
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
				it: "Collera",
				de: "Trotzanfall"
			},
			effect: {
				en: "Flip a coin. If tails, Primeape is now Confused (after doing damage).",
				fr: "Lancez une pièce. Si c'est pile, Colossinge est maintenant Confus (après le calcul des dégâts).",
				it: "Lancia una moneta. Se esce croce, Primeape è Confuso (dopo aver inflitto il danno).",
				de: "Wirf eine Münze. Bei „Zahl“ ist Rasaff jetzt verwirrt (nach der Schadensverteilung)."
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
	retreat: 1,


	description: {
		en: "Always furious and tenacious to boot. It will not abandon chasing its quarry until its quarry is caught.",
		fr: "Agressif et teigneux, il poursuit son gibier jusqu'à épuisement complet.",
		it: "Inseguitore tenace e instancabile, non abbandona la preda finché non l'ha catturata.",
		de: "Stets wild und hartnäckig loszuwerden. Es gibt seine Beute nicht auf, bis sie gefangen ist."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273840,
				tcgplayer: 45146
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273840,
				tcgplayer: 45146
			}
		}
	],
}

export default card
