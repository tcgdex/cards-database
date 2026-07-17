import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Fossil Quarry",
		fr: "Carrière Fossile",
		es: "Cantera de Fósiles",
		'es-mx': "Cantera de Fósiles",
		de: "Fossiliengrube"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "J",

	effect: {
		en: "Once during each player's turn, that player may search their deck for up to 2 Trainer cards with \"Antique\" in their name and put them onto their Bench. Then, that player shuffles their deck."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895860,
				tcgplayer: 704833
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895860,
				tcgplayer: 704833
			}
		},
	],
}

export default card
