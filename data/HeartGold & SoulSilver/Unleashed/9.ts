import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		de: "Mogelbaum"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Rare Holo",
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
				de: "Umschubsen"
			},
			effect: {
				en: "Does 20 damage times the amount of Fighting Energy attached to Sudowoodo.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie Fighting attachées à Simularbre.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzhal der an Mogelbaum angelegten -Energien zu."
			},
			damage: "20x",

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
				de: "Grollen"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
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

	description: {
		en: "It disguises itself as a tree to avoid attack. It hates water, so it will disappear if it starts raining."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
