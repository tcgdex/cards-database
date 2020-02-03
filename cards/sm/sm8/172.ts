import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-172",
	localId: 172,

	// Card informations
	name: {
		en: "Electropower",
		fr: "Électropuissance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/172/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/172/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/172/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/172/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Pendant ce tour, les attaques de vos Pokémon Lightning infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

