import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-73",
	localId: 73,

	// Card informations
	name: {
		en: "Energy Exchanger",
		fr: "Chang'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/73/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/73/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte Énergie dans votre main, montrez-la à votre adversaire et placez-la sur le dessus de votre deck. Cherchez une carte Énergie dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
