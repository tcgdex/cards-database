import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Antique Skull Fossil",
		fr: "Fossile Crâne Ancien",
		es: "Fósil Cráneo Antiguo",
		'es-mx': "Fósil Cráneo Antiguo",
		de: "Antikes Kopffossil"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	effect: {
		en: "Play this card as if it were a 60-HP Basic Pokémon. At any time during your turn, you may discard this card from play. This card can't retreat."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895857,
				tcgplayer: 704830
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895857,
				tcgplayer: 704830
			}
		},
	],
}

export default card
