import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-142",
	localId: 142,

	// Card informations
	name: {
		en: "Escavalier",
		fr: "Lançargot",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 589,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/142/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/142/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/142/high",
		},
	},

	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Discerning Spear",
			fr: "Épieu Distinct",
		},
		text: {
			en: "If your opponent's Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
			fr: "Si le Pokémon Actif de votre adversaire n’a aucun marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
		},
		damage: 80
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Lance",
			fr: "Lance de Fer",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
