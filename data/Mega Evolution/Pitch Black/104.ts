import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Brave Bangle",
		fr: "Bracelet Vaillant",
		es: "Pulsera Osada",
		'es-mx': "Brazalete Valiente",
		de: "Reif der Tapferkeit"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Tool",
	regulationMark: "I",

	effect: {
		en: "The attacks of the Pokémon this card is attached to (excluding Pokémon with a Rule Box) deal 30 more damage to your opponent's Active Pokémon ex."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895889,
				tcgplayer: 704861
			}
		},
	],
}

export default card
