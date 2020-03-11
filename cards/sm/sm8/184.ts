import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-184",
	localId: 184,

	// Card informations
	name: {
		en: "Mixed Herbs",
		fr: "Mélange d’Herbes",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/184/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/184/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/184/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/184/high",
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
			fr: "Vous pouvez jouer 2 cartes Mélange d’Herbes à la fois.\n\n• Si vous avez joué une carte, retirez un État Spécial de votre Pokémon Actif.\n• Si vous avez joué 2 cartes, soignez 90 dégâts et retirez tous les États Spéciaux de votre Pokémon Actif. (Cet effet agit une fois pour 2 cartes.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
