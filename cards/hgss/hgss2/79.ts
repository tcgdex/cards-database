import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-79",
	localId: 79,

	// Card informations
	name: {
		en: "Life Herb",
		fr: "Herbe sauveuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/79/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/79/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Hideaki Hakozaki",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, choisissez l'un de vos Pokémon et retirez à ce dernier jusqu'à 6 marqueurs de dégât. Tous les États Spéciaux de ce Pokémon sont également annulés.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
