import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-170",
	localId: 170,

	// Card informations
	name: {
		en: "Counter Gain",
		fr: "Rattrape-Riposte",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/170/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/170/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/170/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/170/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "S’il vous reste plus de cartes Récompense que votre adversaire, les attaques du Pokémon auquel cette carte est attachée coûtent Colorless de moins.",
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
