import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-182",
	localId: 182,

	// Card informations
	name: {
		en: "Pokégear 3.0",
		fr: "Pokématos 3.0",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/182/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/182/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/182/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/182/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Studio Bora Inc.",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer une carte Supporter que vous y trouvez, puis l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
