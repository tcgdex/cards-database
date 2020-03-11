import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/174/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/174/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



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
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
