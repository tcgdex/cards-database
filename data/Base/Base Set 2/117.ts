import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Super Potion",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 1 Energy card attached to 1 of your own Pokémon in order to remove up to 4 damage counters from that Pokémon.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274040,
				tcgplayer: 42561
			}
		}
	]
}

export default card
