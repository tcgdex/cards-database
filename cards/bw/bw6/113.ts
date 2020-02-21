import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-113",
	localId: 113,

	// Card informations
	name: {
		en: "Devolution Spray",
		fr: "Spray Dés-évoluant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/113/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/113/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Faites dés-évoluer 1 de vos Pokémon évolués et mettez sa carte Évolution de plus haut Niveau dans votre main. (Le Pokémon choisi ne peut pas évoluer pendant ce tour.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
