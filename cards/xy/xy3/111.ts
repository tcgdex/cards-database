import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-111",
	localId: 111,

	// Card informations
	name: {
		en: "Korrina",
		fr: "Cornélia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/111/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/111/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/111/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/111/high.png",
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
			fr: "Cherchez un Pokémon Fighting et une carte Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

