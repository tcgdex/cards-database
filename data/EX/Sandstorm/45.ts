import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre",
		de: "Lombrero"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [271],

	hp: 60,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
		de: "Loturzel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rain Dish",
				fr: "Cuvette",
				de: "Regengenuss"
			},
			effect: {
				en: "At any time between turns, remove 1 damage counter from Lombre.",
				fr: "N'importe quand entre deux tours, retirez à Lombre un marqueur de dégât.",
				de: "Entferne zu einem beliebigen Zeitpunkt zwischen zwei Zügen 1 Schadensmarke von Lombrero."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Double Scratch",
				fr: "Double écorchure",
				de: "Doppelkratzer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275822,
				tcgplayer: 86814
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275822,
				tcgplayer: 86814
			}
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				cardmarket: 871527,
				tcgplayer: 477545
			}
		},
	],

}

export default card
