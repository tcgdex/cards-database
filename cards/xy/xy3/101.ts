import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-101",
	localId: 101,

	// Card informations
	name: {
		en: "Tool Retriever",
		fr: "Collecte d'Outils",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/101/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/101/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/101/high",
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
			fr: "Choisissez jusqu'à 2 cartes Outil Pokémon attachées à vos Pokémon et placez-les dans votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
