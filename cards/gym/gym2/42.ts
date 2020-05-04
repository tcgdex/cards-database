import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-42",
	localId: 42,

	// Card informations
	name: {
		en: "Giovanni's Machoke",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 67,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/42/high",
		},
	},

	evolveFrom: {
		en: "Machop",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Risky Attack",
		},
		text: {
			en: "Flip a coin. If tails, this attack does no damage to the Defending Pokémon and Giovanni's Machoke does 100 damage to itself.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Headlock",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Paralyzed. If tails, this attack does 20 damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
