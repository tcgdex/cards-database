import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Potion Energy"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "If you play this card from your hand, remove 1 damage counter from the Pokémon you attach it to, if it has any. Potion Energy provides Colorless energy. (Doesn't count as a basic Energy card.)"
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274866,
				tcgplayer: 88351
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88351,
				cardmarket: 274866
			}
		}
	],

	retreat: 0
}

export default card
