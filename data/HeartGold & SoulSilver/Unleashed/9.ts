import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		185,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Push Over",
				fr: "Facilité",
			},
			effect: {
				en: "Does 20 damage times the amount of Fighting Energy attached to Sudowoodo.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie Fighting attachées à Simularbre.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rumble",
				fr: "Bagarre",
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
