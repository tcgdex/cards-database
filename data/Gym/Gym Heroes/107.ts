import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Celadon City Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. During each player's turn, that player may choose to discard an Energy card attached to 1 of his or her Pokémon with Erika in its name. If that player does so, that Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.",
	},
	thirdParty: {
		cardmarket: 274243,
		tcgplayer: 84140
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

