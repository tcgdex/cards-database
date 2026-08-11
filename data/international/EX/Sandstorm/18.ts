import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Kecleon",
		'fr-fr': "Kecleon",
		'de-de': "Kecleon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [352],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Energy Variation",
				'fr-fr': "Variation d'énergie",
				'de-de': "Energiefluktuation"
			},
			effect: {
				'en-us': "Kecleon's type is the same as every type of basic Energy card attached to Kecleon.",
				'fr-fr': "Kecleon est du même type que les cartes Énergie de base qui lui sont attachées.",
				'de-de': "Kecleon hat den gleichen Typ wie jede Basis-Energiekarte, die an Kecleon angelegt ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double écorchure",
				'de-de': "Doppelkratzer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275795,
				tcgplayer: 86428
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275795,
				tcgplayer: 86428
			}
		},
	],

}

export default card
