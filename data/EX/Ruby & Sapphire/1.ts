import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
		de: "Stolloss"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [306],

	hp: 110,

	types: [
		"Metal"
	],

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
		de: "Stollrak"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Représailles",
				de: "Vergeltung"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on Aggron.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts pour chaque marqueur de dégât sur Galeking.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff für jede Schadensmarke auf Stollos 10 Schadenspunkte zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
				de: "Megahieb"
			},

			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Lariat",
				fr: "Double lasso",
				de: "Doppel-Lasso"
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 70 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "70×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 4,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275649,
				tcgplayer: 83475
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275649,
				tcgplayer: 83475
			}
		},
	],

}

export default card
