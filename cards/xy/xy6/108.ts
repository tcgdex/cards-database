import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-108",
	localId: 108,

	// Card informations
	name: {
		en: "Winona",
		fr: "Alizée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/108/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/108/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/108/high.png",
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
			fr: "Cherchez jusqu'à 3 Pokémon Colorless dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

