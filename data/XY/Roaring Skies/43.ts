import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
		es: "Togepi",
		it: "Togepi",
		pt: "Togepi",
		de: "Togepi"
	},

	illustrator: "HiRON",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 40,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweet Kiss",
				fr: "Doux Baiser",
				es: "Beso Dulce",
				it: "Dolcebacio",
				pt: "Beijo Doce",
				de: "Bitterkuss"
			},
			effect: {
				en: "Your opponent draws a card.",
				fr: "Votre adversaire pioche une carte.",
				es: "Tu rival roba 1 carta.",
				it: "Il tuo avversario pesca una carta.",
				pt: "Seu oponente compra um card.",
				de: "Dein Gegner zieht 1 Karte."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282711,
		tcgplayer: 98079
	}
}

export default card
