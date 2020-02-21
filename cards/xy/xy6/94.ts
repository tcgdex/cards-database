import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-94",
	localId: 94,

	// Card informations
	name: {
		en: "Wally",
		fr: "Timmy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/94/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/94/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/94/high",
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
			fr: "Cherchez dans votre deck une carte Évolution de l'un de vos Pokémon (excepté les Pokémon-EX) et placez-la sur ce dernier. (Cela équivaut à faire évoluer le Pokémon.) Mélangez ensuite votre deck. Vous pouvez utiliser cette carte pendant votre premier tour ou sur un Pokémon qui a été joué pendant ce tour.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
