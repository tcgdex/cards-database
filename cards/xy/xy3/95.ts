import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-95",
	localId: 95,

	// Card informations
	name: {
		en: "Korrina",
		fr: "Cornélia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/95/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/95/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/95/high.png",
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
			fr: "Cherchez un Pokémon Fighting et une carte Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

