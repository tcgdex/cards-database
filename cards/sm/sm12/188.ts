import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-188",
	localId: 188,

	// Card informations
	name: {
		en: "Clay",
		fr: "Bardane",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/188/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/188/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/188/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/188/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez les 7 cartes du dessus de votre deck. Si l’une de ces cartes est une carte Objet, placez-la dans votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
