import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Gwynn",
		fr: "Albia",
		es: "Inma",
		'es-mx': "Inma",
		de: "Gwynn"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		en: "Discard up to 2 Pokémon that don't have a Rule Box from your hand, and draw 3 cards for each card you discarded n this way. (Pokémon ex, Pokémon V, etc. have Rule Boxes)",
		de: "Lege bis zu 2 Pokémon, die kein Regelfeld haben, aus deiner Hand auf deinen Ablagestapel und ziehe 3 Karten für jede auf diese Weise abgelegte Karte. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)\n\nDu kannst während deines Zuges nur 1 Unterstützerkarte spielen."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895894,
				tcgplayer: 704866
			}
		},
	],
}

export default card
