import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-141",
	localId: 141,

	// Card informations
	name: {
		en: "Beast Ring",
		fr: "Cercle Chimérique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/141/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/141/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/141/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/141/high",
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
			fr: "Vous ne pouvez jouer cette carte que s’il reste exactement 3 ou 4 cartes Récompense à votre adversaire.\n\nCherchez jusqu’à 2 cartes Énergie de base dans votre deck et attachez-les à l’une de vos Ultra-Chimères. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
