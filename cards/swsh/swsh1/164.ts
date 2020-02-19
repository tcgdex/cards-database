import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-164",
	localId: 164,

	// Card informations
	name: {
		en: "Great Ball",
		fr: "Super Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/164/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/164/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 68,
		name: "Toyste Beach"
	},



	effect: {
		en: "Look at the top 7 cards of your deck. You may reveal a Pokémon you find there and put it into your hand. Shuffle the other cards back into your deck.",
		fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon que vous y trouvez, puis l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
	},







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
