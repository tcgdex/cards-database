import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-58",
	localId: 58,

	// Card informations
	name: {
		en: "Jessie & James",
		fr: "Jessie et James",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur défausse 2 cartes de sa main. Votre adversaire défausse en premier.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
