import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-198",
	localId: 198,

	// Card informations
	name: {
		en: "Great Potion",
		fr: "Potion Géniale",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/198/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/198/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/198/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/198/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 50 dégâts à votre Pokémon-GX Actif.",
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
