import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
		de: "Jirachi"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Wish",
				fr: "Vœu",
				de: "Wunschtraum"
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heart Sign",
				fr: "Signe de Cœur",
				de: "Herzbild"
			},

			damage: 50,

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
		en: "The twinkle of the stars. The destiny of love. A miracle that grants wishes in the night sky.",
		de: "Das Funkeln der Sterne. Die Vorsehung der Liebe. Ein Wunder, das Wünsche unterm Nachthimmel erfüllt."
	},

	thirdParty: {
		cardmarket: 288522
	}
}

export default card
