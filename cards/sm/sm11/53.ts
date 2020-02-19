import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm11/53/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/53/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/53/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

