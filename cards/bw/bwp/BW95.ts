import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW95",
	localId: "BW95",

	// Card informations
	name: {
		en: "Champions Festival",
		fr: "Festival des Champions",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW95/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW95/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, si ce joueur a 6 Pokémon en jeu, il peut soigner 10 dégâts à chacun de ses Pokémon.",
		},
	},{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez cette carte si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
