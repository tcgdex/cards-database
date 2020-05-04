import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-102",
	localId: 102,

	// Card informations
	name: {
		en: "Revive",
		fr: "Rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/102/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/102/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
		},
	},{
		name: {},
		text: {
			fr: "Vous pouvez jouer autant de cartes Objet que vous le voulez pendant votre tour (avant votre attaque).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
