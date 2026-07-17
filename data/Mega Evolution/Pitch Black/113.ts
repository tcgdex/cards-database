import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Tremendous Bomb",
		fr: "Bombe Géniale",
		es: "Bomba Formidable",
		'es-mx': "Tremenda Bomba",
		de: "Ungeheure Bombe"
	},

	illustrator: "inose yukie",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Tool",
	regulationMark: "J",

	effect: {
		en: "If the Active Pokémon this card is attached to is not a Mega Pokémon ex and takes 240 damage or more from an attack from your opponent's Mega Pokémon ex, put 12 damage counters on the attacking Pokémon and discard this card."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895898,
				tcgplayer: 704870
			}
		},
	],
}

export default card
