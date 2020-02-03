import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-73",
	localId: 73,

	// Card informations
	name: {
		en: "Faded Town",
		fr: "Ville Abandonnée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/73/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/73/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/73/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "N'importe quand entre chaque tour, placez 2 marqueurs de dégâts sur chacun des Pokémon Méga-Évolution.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

