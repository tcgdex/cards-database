import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-1",
	localId: 1,

	// Card informations
	name: {
		en: "Aggron",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/1/high",
		},
	},

	evolveFrom: {
		en: "Lairon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heap Up",
		},
		text: {
			en: "Search your discard pile for all Energy cards and show them to your opponent. If you find any Metal Special Energy cards there, this attack does 40 damage plus 30 more damage. Put all of those Energy cards on top of your deck. Shuffle your deck afterward.",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Hard Metal",
		},
		text: {
			en: "You may do 60 damage plus 40 more damage. If you do, Aggron does 40 damage to itself.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+40"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
