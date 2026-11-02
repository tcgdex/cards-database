import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Misty",
		fr: "Ondine",
		de: "Misty",
		es: "Misty",
		it: "Misty",
		pt: "Misty",
		'es-mx': "Misty"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",
	effect: {
		en: "Discard 2 of the other cards in your hand in order to play this card. If this turn's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), and if the attacking Pokémon has missy in its name, the attack does 20 more damage to the Defending Pokémon."
	},
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907941,
				tcgplayer: 716159
			}
		}
	],
}

export default card
