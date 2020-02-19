import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-229",
	localId: 229,

	// Card informations
	name: {
		en: "Choice Helmet",
		fr: "Casque Choix",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/229/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/229/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/229/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/229/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon auquel cette carte est attachée subit 30 dégâts de moins provenant des attaques des Pokémon-GX et des Pokémon-EX de votre adversaire (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

