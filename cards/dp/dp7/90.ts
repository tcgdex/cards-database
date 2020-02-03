import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-90",
	localId: 90,

	// Card informations
	name: {
		en: "Poké Healer +",
		fr: "Poké Healer +",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/90/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/90/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/90/high.png",
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
			fr: "Vous pouvez jouer 2 Poké Guérison + en même temps. Si vous jouez 1 Poké Guérison +, retirez à 1 de vos Pokémon Actifs 1 marqueur de dégât et un État Spécial. Si vous jouez 2 Poké Guérison +, retirez à 1 de vos Pokémon Actifs 8 marqueurs de dégât et tous ses États Spéciaux.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

