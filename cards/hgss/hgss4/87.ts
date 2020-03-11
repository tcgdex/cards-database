import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Junk Arm",
		fr: "Bras indésirable",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/87/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/87/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/87/high",
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
			fr: "Défaussez 2 cartes de votre main. Cherchez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire et ajoutez-la à votre main. Vous ne pouvez pas associer Bras indésirable aux effets de cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
