import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY27",
	localId: "XY27",

	// Card informations
	name: {
		en: "Champions Festival",
		fr: "Festival des Champions",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY27/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY27/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Naoki Saito",



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
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
