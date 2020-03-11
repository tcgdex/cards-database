import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-88",
	localId: 88,

	// Card informations
	name: {
		en: "Poké Blower +",
		fr: "Poké Blower +",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/88/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/88/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/88/high",
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
			fr: "Vous pouvez jouer 2 Poké Coup + en même temps. Si vous jouez 1 Poké Coup +, lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur 1 des Pokémon de votre adversaire. Si vous jouez 2 Poké Coup +, choisissez 1 des Pokémon de Banc de votre adversaire et échangez-le avec 1 de ses Pokémon Actifs.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
