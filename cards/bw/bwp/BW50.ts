import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW50",
	localId: "BW50",

	// Card informations
	name: {
		en: "Tropical Beach",
		fr: "Plage Tropicale",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW50/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW50/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut piocher des cartes jusqu'à ce qu'il ait 7 cartes dans sa main. Dans ce cas, son tour est terminé.",
		},
	},{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez cette carte si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
