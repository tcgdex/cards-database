import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'de-de': "Hunduster"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Corner",
				'fr-fr': "Coincé",
				'de-de': "Corner"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'de-de': "The Defending Pokémon can't retreat during your opponent's next turn."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup rapide",
				'de-de': "Lunge"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},

			damage: 30
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When night falls, the air fills with the eerie cries of this Pokémon as it stakes out its territory.",
		'fr-fr': "Quand la nuit tombe, les hurlements sinistres de ce Pokémon retentissent dans le silence tandis qu'il chasse sur son territoire."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274695,
				tcgplayer: 86219
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274695,
				tcgplayer: 86219
			}
		}
	]
}

export default card
