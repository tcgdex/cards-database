import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Backtrack Badge",
		fr: "Badge Rebelote",
		es: "Insignia Reintento",
		'es-mx': "Insignia Retroactiva",
		de: "Retourorden"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	regulationMark: "J",

	effect: {
		en: "Once during your turn, after you flip any coins for an attack of the Colorless Pokémon this card is attached to, you may ignore all results of those coin flips and begin flipping those coins again."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895858,
				tcgplayer: 704831
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895858,
				tcgplayer: 704831
			}
		},
	],
}

export default card
