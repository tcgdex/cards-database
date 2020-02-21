import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-88",
	localId: 88,

	// Card informations
	name: {
		en: "Warp Point",
		fr: "Point d'échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/88/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/88/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire échange 1 de ses Pokémon Défenseurs avec 1 des Pokémon de son Banc, s'il en a. Vous échangez 1 de vos Pokémon Actifs avec 1 de vos Pokémon de Banc, si vous en avez.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
