import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-104",
	localId: 104,

	// Card informations
	name: {
		en: "Misty's Determination",
		fr: "Détermination d'Ondine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/104/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/104/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/104/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez une carte de votre main. Dans ce cas, regardez les 8 cartes du dessus de votre deck et ajoutez l'une d'entre elles à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

