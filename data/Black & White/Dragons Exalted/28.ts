import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
		es: "Milotic",
		it: "Milotic",
		pt: "Milotic",
		de: "Milotic"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
		de: "Barschwa"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Clear Search",
				fr: "Recherche Libre",
				de: "Klare Sicht"
			},
			effect: {
				en: "Search your deck for any 3 cards and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez 3 cartes dans votre deck puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 3 beliebigen Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				de: "Aquawelle"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its lovely scales are described as rainbow colored. They change color depending on the viewing angle.",
		de: "Seine Schuppen sind regenbogenfarben. Die jeweiligen Farben verändern sich je nach Blickwinkel."
	},

	thirdParty: {
		cardmarket: 280467,
		tcgplayer: 87457
	}
}

export default card
