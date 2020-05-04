import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-30",
	localId: 30,

	// Card informations
	name: {
		en: "Graveler",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 75,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/30/high",
		},
	},

	evolveFrom: {
		en: "Geodude",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Earthquake",
		},
		text: {
			en: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Rock Tumble",
		},
		text: {
			en: "Don't apply Resistance.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
