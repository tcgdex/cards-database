import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-172",
	localId: 172,

	// Card informations
	name: {
		en: "Electropower",
		fr: "Électropuissance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/172/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/172/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/172/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/172/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		name: {},
		text: {
			fr: "Pendant ce tour, les attaques de vos Pokémon Lightning infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
