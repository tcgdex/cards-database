import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Fuchsia City Gym"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play after being played. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may flip a coin. If heads, that player may shuffle 1 of his or her Pokémon in play with Koga in its name and any cards attached to it into his or her deck."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85578,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85578,
				cardmarket: 274382
			}
		},
	],
	trainerType: "Stadium"
}

export default card
