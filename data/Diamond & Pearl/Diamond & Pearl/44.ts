import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Cascoon",
		fr: "Blindalys",
		de: "Panekon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		268,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Harden",
				fr: "Armure",
				de: "Härtner"
			},
			effect: {
				en: "During your opponent's next turn, if Cascoon would be damaged by an attack, prevent that attack's damage done to Cascoon if that damage is 30 or less.",
				fr: "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Blindalys, prévenez ces dégâts s'ils sont de 30 ou moins.",
				de: "Wenn Panekon während des nächsten Zuges deines Gegners durch einen Angriff 30 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Gooey Thread",
				fr: "Fil gluant",
				de: "Klebriger Faden"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		fr: "Il est au chaud dans son cocon. Ses cellules produisent l'énergie nécessaire à son évolution."
	},

	thirdParty: {
		cardmarket: 277543,
		tcgplayer: 84121
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
