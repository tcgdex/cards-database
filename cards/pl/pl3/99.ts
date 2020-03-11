import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-99",
	localId: 99,

	// Card informations
	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 415,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/99/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/99/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Nap",
			fr: "Tit'sieste",
		},
		text: {
			en: "Remove 2 damage counters from Combee.",
			fr: "Retirez à Apitrini 2 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Zzzt",
			fr: "Bzzz",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
