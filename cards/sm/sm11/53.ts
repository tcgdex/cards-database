import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-53",
	localId: 53,

	// Card informations
	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
	},

	hp: 120,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Razor Fin",
			fr: "Aileron-Rasoir",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Nature Wave",
			fr: "Onde Naturelle",
		},
		text: {
			en: "If your opponent has any Ultra Beasts in play, this attack can be used for Colorless.",
			fr: "Si votre adversaire a une Ultra-Chimère en jeu, cette attaque peut être utilisée pour Colorless.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
