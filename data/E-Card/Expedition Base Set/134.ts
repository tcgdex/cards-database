import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Super Energy Removal 2",
		fr: "Kaiminus",
		de: "Karnimani"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	dexId: [
		158,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surfer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Scratch",
				fr: "Double griffe",
				de: "Doppelkratzer"
			},
			effect: {
				en: "Flip 2 coins. If both are heads, discard all Energy cards attached to the Defending Pokémon. If both are tails, discard all Energy cards attached to your Active Pokémon. If 1 is heads and 1 is tails, this card does nothing.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20x",

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
				tcgplayer: 89994,
				cardmarket: 275009
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
