import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-232",
	localId: 232,

	// Card informations
	name: {
		en: "Channeler",
		fr: "Exorciste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/232/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/232/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/232/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/232/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Retirez tous les effets d’attaques sur vous et sur chacun de vos Pokémon.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
