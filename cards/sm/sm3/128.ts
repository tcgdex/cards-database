import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-128",
	localId: 128,

	// Card informations
	name: {
		en: "Wishful Baton",
		fr: "Relais Optimiste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/128/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/128/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/128/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu’il est mis K.O. par les dégâts d’une attaque de votre adversaire, déplacez jusqu’à 3 cartes Énergie de base de ce Pokémon à l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
