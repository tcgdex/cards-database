import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Jett",
		fr: "Bridjet",
		es: "Viona",
		'es-mx': "Viona",
		de: "Jette"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		en: "Draw a card for each of your opponent's Mega Evolution Pokémon ex in play."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895863,
				tcgplayer: 704836
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895863,
				tcgplayer: 704836
			}
		},
	],
}

export default card
