import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-116",
	localId: 116,

	// Card informations
	name: {
		en: "Warp Point",
		fr: "Point d'échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/116/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/116/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/116/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire échange 1 de ses Pokémon Défenseurs avec 1 des Pokémon de son Banc, s'il en a. Vous échangez 1 de vos Pokémon Actifs avec 1 des Pokémon de votre Banc, si vous en avez.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

