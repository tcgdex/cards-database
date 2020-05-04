import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-43",
	localId: 43,

	// Card informations
	name: {
		en: "Omastar",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/43/high",
		},
	},

	evolveFrom: {
		en: "Omanyte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin-ichi Yoshida",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Squeeze",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed. If tails, this attack does 10 damage.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Spike Barrage",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy attached to Omastar. This attack does 20 damage plus 20 more for each heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
