import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-12",
	localId: 12,

	// Card informations
	name: {
		en: "Tyranitar",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/12/high",
		},
	},

	evolveFrom: {
		en: "Piloswine",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 times the number of heads.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trample",
		},
		text: {
			en: "For each Benched Pokémon in play (yours and your opponent's), flip a coin. If heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
