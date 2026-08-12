import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Leavanny",
		fr: "Manternel",
		es: "Leavanny",
		it: "Leavanny",
		pt: "Leavanny",
		de: "Matrifol"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
		de: "Folikon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Triple Cutter",
				fr: "Triple Lame",
				de: "Dreifachschnitt"
			},
			effect: {
				en: "Flip 3 coins. This attack does 60 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle.",
		de: "Nutzt die Hitze kompostierenden Laubes zum Ausbrüten von Eiern. Es fertigt aus Blättern Kleidchen für Strawickl an."
	},

	thirdParty: {
		cardmarket: 279972,
		tcgplayer: 86686
	}
}

export default card
