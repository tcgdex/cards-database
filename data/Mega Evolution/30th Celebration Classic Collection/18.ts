import { Card } from '../../../interfaces'
import Set from "../30th Celebration Classic Collection"

const card: Card = {
	name: {
		en: "Misty"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 2 of the other cards in your hand in order to play this card. If this turn's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), and if the attacking Pokémon has Misty in its name, the attack does 20 more damage to the Defending Pokémon."
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907941,
				tcgplayer: 716159
			}
		}
	],
}

export default card
