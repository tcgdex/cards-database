import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-81",
	localId: 81,

	// Card informations
	name: {
		en: "Energy Restore",
		fr: "Restauration d'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/81/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/81/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/81/high",
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
			fr: "Lancez 3 pièces. Pour chaque face, placez une carte Énergie de base de votre pile de défausse dans votre main. Si vous ne possédez pas autant de cartes Énergie de base dans votre pile de défausse, placez-les toutes dans votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
