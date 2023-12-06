import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Pineco",
		de: "Tannza"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		204,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				de: "Energiefokus"
			},

			effect: {
				en: 'During your next turn, Pineco\'s Surprise Attack attack\'s base damage is 80',
				de: "In deinem nächsten Zug beträgt der Grundschaden von Tannzas Überraschungsangriff 80 Schadenspunkte."
			}
		},
		{
			cost: [
				'Grass',
				'Colorless'
			],
			name: {
				en: 'Surprise Attack',
				de: "Überraschungsangriff"
			},
			effect: {
				en: 'Flip a coin. If tails, this attack does nothing.',
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
