import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
		es: "Martillo Demoledor",
		'es-mx': "Martillo Demoledor",
		de: "Schmetterhammer"
	},

	illustrator: "Ayako Yoshida",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	effect: {
		en: "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895890,
				tcgplayer: 704862
			}
		},
	],
}

export default card
