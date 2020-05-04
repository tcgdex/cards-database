import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-112",
	localId: 112,

	// Card informations
	name: {
		en: "Yungoos",
		fr: "Manglouton",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 734,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Misa Tsutsui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scout",
			fr: "Espionnage",
		},
		text: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s’inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
