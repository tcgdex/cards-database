import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-201",
	localId: 201,

	// Card informations
	name: {
		en: "Karate Belt",
		fr: "Ceinture de Karaté",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/201/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/201/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/201/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/201/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "S’il vous reste plus de cartes Récompense qu’à votre adversaire, les attaques du Pokémon auquel cette carte est attachée coûtent Fighting de moins.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

