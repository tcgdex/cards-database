import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "No Removal Gym"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. A player must discard 2 cards from his or her hand in order to play an Energy Removal or Super Energy Removal card."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87789,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87789,
				cardmarket: 274239
			}
		}
	],
	trainerType: "Stadium"
}

export default card

