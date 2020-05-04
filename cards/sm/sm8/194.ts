import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-194",
	localId: 194,

	// Card informations
	name: {
		en: "Memory Energy",
		fr: "Énergie Mémoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/194/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/194/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/194/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/194/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless.\n\nLe Pokémon auquel cette carte est attachée peut utiliser les attaques de ses précédentes Évolutions. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
