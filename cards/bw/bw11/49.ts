import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-49",
	localId: 49,

	// Card informations
	name: {
		en: "Emolga",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 587,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
		},
		text: {
			en: "Search your deck for 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Static Shock",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
