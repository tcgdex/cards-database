import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-48",
	localId: 48,

	// Card informations
	name: {
		en: "Whiscash",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 340,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/48/high",
		},
	},

	evolveFrom: {
		en: "Barboach",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu",

	abilities: [{
		id: 64,
		type: AbilityType.POKEBODY,
		name: {
			en: "Submerge",
		},
		text: {
			en: "As long as Whiscash is on your Bench, prevent all damage done to Whiscash by opponent's attacks.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnitude",
		},
		text: {
			en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
