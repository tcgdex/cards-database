import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-120",
	localId: 120,

	// Card informations
	name: {
		en: "Counter Catcher",
		fr: "Attrape-Riposte",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/120/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/120/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/120/high",
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
			fr: "Vous pouvez jouer cette carte seulement s’il vous reste plus de cartes Récompense que votre adversaire.\n\nÉchangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
