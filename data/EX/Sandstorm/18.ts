import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon",
		de: "Kecleon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		352,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Variation",
				fr: "Variation d'énergie",
				de: "Energiefluktuation"
			},
			effect: {
				en: "Kecleon's type is the same as every type of basic Energy card attached to Kecleon.",
				fr: "Kecleon est du même type que les cartes Énergie de base qui lui sont attachées.",
				de: "Kecleon hat den gleichen Typ wie jede Basis-Energiekarte, die an Kecleon angelegt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Scratch",
				fr: "Double écorchure",
				de: "Doppelkratzer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275795,
		tcgplayer: 86428
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
