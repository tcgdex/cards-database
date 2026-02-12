import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "kirisAki",
	category: "Pokemon",

	description: {
		en: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted."
	},
	

	types: ["Fire",],

	stage: "Basic",

	attacks: [{
		name: {
			en: "Roar",
			fr: "Hurlement"
		},

		effect: {
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc."
		}
	}, {
		name: {
			en: "Gnaw",
			fr: "Ronge"
		},

		damage: 10
	}],

	name: {
		en: "Vulpix",
		fr: "Goupix"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275057
	}
}

export default card