import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-79",
	localId: 79,

	// Card informations
	name: {
		en: "Murkrow",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 198,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Evil Eye",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. Put a damage counter on that Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blindside",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon that has a damage counter on it. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
