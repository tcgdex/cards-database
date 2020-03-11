import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-231",
	localId: 231,

	// Card informations
	name: {
		en: "Custom Catcher",
		fr: "Attrape-Perso",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/231/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/231/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/231/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/231/high",
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
			fr: "Vous pouvez jouer 2 cartes Attrape-Perso à la fois.\n\n• Si vous avez joué une carte, piochez des cartes jusqu’à ce que vous ayez 3 cartes en main.\n• Si vous avez joué 2 cartes, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. (Cet effet agit une fois pour 2 cartes.)",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
