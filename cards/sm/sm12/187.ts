import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-187",
	localId: 187,

	// Card informations
	name: {
		en: "Chaotic Swell",
		fr: "Houle Chaotique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/187/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/187/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/187/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/187/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque fois qu’un des joueurs joue une carte Stade de sa main, défaussez cette carte Stade après avoir défaussé celle-ci. (La nouvelle carte Stade n’a aucun effet.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
