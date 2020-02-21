import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-62",
	localId: 62,

	// Card informations
	name: {
		en: "Misty's Determination",
		fr: "Détermination d’Ondine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/62/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/62/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez une carte de votre main. Dans ce cas, regardez les 8 cartes du dessus de votre deck, puis ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
