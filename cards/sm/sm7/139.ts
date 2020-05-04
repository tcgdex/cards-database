import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-139",
	localId: 139,

	// Card informations
	name: {
		en: "The Masked Royal",
		fr: "Royal Mask",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/139/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/139/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/139/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/139/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Attachez une carte Énergie de base de votre main à l’un de vos Pokémon Grass, Fire ou Water de Niveau 2.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
