import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius",
		de: "Tropius"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		357,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Green Call",
				fr: "Appel de la verdure",
				de: "Grüner Ruf"
			},
			effect: {
				en: "Flip 2 coins. For each heads, search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. If you do, shuffle your deck afterward.",
				fr: "Lancez 2 pièces. Pour chaque côté face, cherchez un Pokémon Grass dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Dans ce cas, mélangez ensuite votre deck.",
				de: "Wirf 2 Münzen. Durchsuche pro \"Kopf\" dein Deck nach 1 -Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck, falls du nach Karten gesucht hast."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				de: "Windstoß"
			},

			damage: 20,

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The bunch of fruit around its neck ripens twice a year and is delicious. It’s a highly favored tropical snack."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279222
	}
}

export default card
