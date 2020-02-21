import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-91",
	localId: 91,

	// Card informations
	name: {
		en: "Magnetic Storm",
		fr: "Tempête Magnétique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/91/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/91/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/91/high",
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
			fr: "Chaque Pokémon en jeu n'a pas de Résistance.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
