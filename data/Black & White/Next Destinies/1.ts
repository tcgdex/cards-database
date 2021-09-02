import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		it: "Pinsir",
		pt: "Pinsir",
		de: "Pinsir"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		127,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Pinch",
				fr: "Pinces Vigoureuses",
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Grip and Squeeze",
				fr: "Empoigne Puissante",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
