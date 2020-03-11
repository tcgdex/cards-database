import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Energy Restore",
		fr: "Restauration d'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/106/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/106/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Hideyuki Nakajima",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 3 pièces. Pour chaque face, placez une carte Énergie de votre pile de défausse dans votre main. Si vous n'avez pas assez de cartes Énergie de base dans votre pile de défausse, placez-les toutes dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
