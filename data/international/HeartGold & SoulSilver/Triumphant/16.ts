import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'de-de': "Venuflibis"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [455],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Saliva Lure",
				'fr-fr': "Piège de salive",
				'de-de': "Speichelköder"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Échangez le Pokémon Défenseur avec l’un des Pokémon de Banc de votre adversaire.",
				'de-de': "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Stick and Absorb",
				'fr-fr': "Colle et absorbe",
				'de-de': "Festkleben und Einsaugen"
			},
			effect: {
				'en-us': "Remove 3 damage counters from Carnivine. The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Retirez 3 marqueurs de dégât à Vortente. Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				'de-de': "Entferne 3 Schadensmarken von Venuflibis. Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It walks around on its tentacles in search of a tree branch where it can dangle down and ambush prey."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84105,
				cardmarket: 279546
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279546,
				tcgplayer: 84105
			}
		},
	],

}

export default card
