import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-66",
	localId: 66,

	// Card informations
	name: {
		en: "Olympia",
		fr: "Astera",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/66/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/66/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/66/high.png",
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
			fr: "Échangez votre Pokémon Actif avec l'un de vos Pokémon de Banc. Dans ce cas, soignez 30 dégâts au Pokémon que vous avez placé sur votre Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card

