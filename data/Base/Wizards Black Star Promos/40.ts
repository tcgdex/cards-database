import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Pokémon Center",
	},
	illustrator: "\"Big Mama\" Tagawa",
	rarity: "Common",
	category: "Trainer",

	set: Set,

	effect: {
		en: "Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88213
			},
		}
	],
	thirdParty: {
		cardmarket: 275459,
	}
}

export default card
