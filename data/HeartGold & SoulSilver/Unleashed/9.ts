import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		de: "Mogelbaum"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [185],

	hp: 90,

	types: [
		"Fighting"
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
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Mogelbaum angelegten {F}-Energien zu."
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
				de: "Grollen"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
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
		en: "It disguises itself as a tree to avoid attack. It hates water, so it will disappear if it starts raining.",
		de: "Es tarnt sich als Baum, um nicht angegriffen zu werden. Es hasst Wasser, darum läuft es bei Regen weg."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89596,
				cardmarket: 279165
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89596,
				cardmarket: 279165
			}
		},
	],

}

export default card
