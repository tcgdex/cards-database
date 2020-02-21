import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-117",
	localId: 117,

	// Card informations
	name: {
		en: "Lana",
		fr: "Néphie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/117/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/117/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/117/high",
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
			fr: "Soignez 50 dégâts à chacun de vos Pokémon auquel de l’Énergie Water est attachée.",
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
