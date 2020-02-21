import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-126",
	localId: 126,

	// Card informations
	name: {
		en: "Weakness Policy",
		fr: "Vulné-Assurance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/126/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon auquel cette carte est attachée n’a pas de Faiblesse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
