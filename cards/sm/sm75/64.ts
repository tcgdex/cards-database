import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-64",
	localId: 64,

	// Card informations
	name: {
		en: "Zinnia",
		fr: "Amaryllis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/64/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/64/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire.\n\nAttachez jusqu’à 2 cartes Énergie de base de votre main à l’un de vos Pokémon Dragon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
