import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-122",
	localId: 122,

	// Card informations
	name: {
		en: "Acro Bike",
		fr: "Vélo Cross",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/122/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/122/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/122/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/122/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 2 cartes du dessus de votre deck et ajoutez l'une d'entre elles à votre main. Défaussez l'autre carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

