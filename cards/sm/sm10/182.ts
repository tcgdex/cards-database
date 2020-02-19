import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm10/182/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/182/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/182/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/182/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 121,
		name: "Studio Bora Inc."
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer une carte Supporter que vous y trouvez, puis l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

