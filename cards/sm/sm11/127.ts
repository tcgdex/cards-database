import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-127",
	localId: 127,

	// Card informations
	name: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/127/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/127/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/127/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Bomb",
			fr: "Bomb-Beurk",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
