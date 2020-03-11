import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-54",
	localId: 54,

	// Card informations
	name: {
		en: "Misty's Dewgong",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 87,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/54/high",
		},
	},

	evolveFrom: {
		en: "Seel",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Ice Throw",
		},
		text: {
			en: "If the Defending Pokémon is , this attack's base damage is doubled.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
		},
		text: {
			en: "Misty's Dewgong does 20 damage to itself.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
