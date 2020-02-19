import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm12/188/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/188/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/188/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/188/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez les 7 cartes du dessus de votre deck. Si l’une de ces cartes est une carte Objet, placez-la dans votre main.",
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

