import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Antique Armor Fossil",
		fr: "Fossile Armure Ancien",
		es: "Fósil Coraza Antiguo",
		'es-mx': "Fósil Coraza Antiguo",
		de: "Antikes Panzerfossil"
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
				cardmarket: 895856,
				tcgplayer: 704829
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895856,
				tcgplayer: 704829
			}
		},
	],
}

export default card
