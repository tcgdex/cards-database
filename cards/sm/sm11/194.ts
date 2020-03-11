import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-194",
	localId: 194,

	// Card informations
	name: {
		en: "Ear-Ringing Bell",
		fr: "Cloche Sonnante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/194/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/194/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/194/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/194/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si le Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
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
