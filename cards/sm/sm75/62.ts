import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-62",
	localId: 62,

	// Card informations
	name: {
		en: "Switch Raft",
		fr: "Bouée d’Échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/62/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/62/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Échangez votre Pokémon Actif Water avec l’un de vos Pokémon de Banc. Dans ce cas, soignez 30 dégâts au Pokémon que vous avez déplacé vers votre Banc.",
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
