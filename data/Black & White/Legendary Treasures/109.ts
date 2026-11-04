import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		de: "Bell",
		en: "Bianca",
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "Draw cards until you have 6 cards in your hand."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 281260,
				tcgplayer: 83815
			}
		},
		{
			type: 'holo',
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 371593
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 281260,
				tcgplayer: 83815
			}
		},
	],
}

export default card
