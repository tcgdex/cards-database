import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-211",
	localId: 211,

	// Card informations
	name: {
		en: "U-Turn Board",
		fr: "Planche Demi-Tour",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/211/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/211/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/211/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/211/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 140,
		name: "sadaji"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de Colorless.\n\nSi cette carte est défaussée du jeu, placez-la dans votre main plutôt que dans la pile de défausse.",
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
