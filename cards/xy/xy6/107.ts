import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-107",
	localId: 107,

	// Card informations
	name: {
		en: "Wally",
		fr: "Timmy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/107/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/107/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Emi Ando",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck une carte Évolution de l'un de vos Pokémon (excepté les Pokémon-EX) et placez-la sur ce dernier. (Cela équivaut à faire évoluer le Pokémon.) Mélangez ensuite votre deck. Vous pouvez utiliser cette carte pendant votre premier tour ou sur un Pokémon qui a été joué pendant ce tour.",
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
