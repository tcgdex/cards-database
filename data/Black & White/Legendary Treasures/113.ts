import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Double Colorless Energy",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Double Colorless Energy provides ColorlessColorless Energy."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 281264,
				tcgplayer: 84885
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 281264,
				tcgplayer: 84885
			}
		},
	],
}

export default card
