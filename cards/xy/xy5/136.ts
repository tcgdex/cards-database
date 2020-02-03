import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-136",
	localId: 136,

	// Card informations
	name: {
		en: "Repeat Ball",
		fr: "Bis Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/136/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/136/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/136/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/136/high.png",
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
			fr: "Cherchez dans votre deck un Pokémon du même nom que l'un de vos Pokémon en jeu, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
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

