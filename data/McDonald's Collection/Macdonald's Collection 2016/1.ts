import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "kirisAki",
	category: "Pokemon",

	description: {
		en: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Roar"
		},

		effect: {
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon."
		}
	}, {
		name: {
			en: "Gnaw"
		},

		damage: 10
	}],

	name: {
		en: "Vulpix"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275057
	}
}

export default card