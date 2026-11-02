import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		it: "Togetic",
		pt: "Togetic",
		de: "Togetic"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
		de: "Togepi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweet Kiss",
				fr: "Doux Baiser",
				de: "Bitterkuss"
			},
			effect: {
				en: "Your opponent draws a card.",
				fr: "Votre adversaire pioche une carte.",
				de: "Dein Gegner zieht 1 Karte."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		en: "To share its happiness, it flies around the world seeking kind-hearted people.",
		de: "Um sein Glück mit anderen zu teilen, fliegt es um die Welt auf der Suche nach gutherzigen Menschen."
	},

	thirdParty: {
		cardmarket: 280843,
		tcgplayer: 89945
	}
}

export default card
