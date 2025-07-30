import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Oddish",
		fr: "Mystherbe",
		de: "Myrapla"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		43,
	],

	hp: 40,

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
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Find a Friend",
				fr: "Trouver un ami",
				de: "Freunde finden"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c’est face, cherchez un Pokémon Grass dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				de: "Wirf eine Münze. Durchsuche bei \"Kopf\" dein Deck nach 1 -Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Awakened by moonlight, it roams actively at night. In the day it stays quietly underground."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279313,
		tcgplayer: 87845
	}
}

export default card
