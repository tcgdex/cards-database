import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy3/111/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/111/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



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
