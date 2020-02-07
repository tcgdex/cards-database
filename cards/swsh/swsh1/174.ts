import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-174",
	localId: 174,

	// Card informations
	name: {
		en: "Pokégear 3.0",
		fr: "Pokématos 3.0",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/174/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/174/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/174/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/174/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 65,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			en: "Look at the top 7 cards of your deck. You may reveal a Supporter card you find there and put it into your hand. Shuffle the other cards back into your deck.",
			fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer une carte Supporter que vous y trouvez, puis l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

