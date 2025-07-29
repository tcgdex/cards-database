import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		de: "Hippoterus"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		450,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vacuum Up",
				fr: "Aspirer",
				de: "Ansaugbiss"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Eject",
				fr: "Jeteur de sable",
				de: "Sandausstoß"
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.",
				fr: "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 40 dégâts supplémentaires.",
				de: "Während deines nächsten Zuges, wenn ein Angriff dem Verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		fr: "Il emmagasine du sable qu'il expulse en tornades par les pores de sa peau pour attaquer."
	},

	thirdParty: {
		cardmarket: 277528
	}
}

export default card
