import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-116",
	localId: 116,

	// Card informations
	name: {
		en: "Tool Scrapper",
		fr: "Arrache-Outil",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/116/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/116/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez jusqu'à 2 cartes Outil Pokémon attachées aux Pokémon en jeu (les vôtres ou ceux de votre adversaire) et défaussez-les.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
