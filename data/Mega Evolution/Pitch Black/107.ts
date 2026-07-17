import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
		es: "Interruptor de Energía",
		'es-mx': "Cambio de Energía",
		de: "Energie-Umschalter"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",

	effect: {
		en: "Move a basic Energy from 1 of your Pokémon to another of your Pokémon."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895892,
				tcgplayer: 704864
			}
		},
	],
}

export default card
