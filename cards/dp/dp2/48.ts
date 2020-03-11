import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-48",
	localId: 48,

	// Card informations
	name: {
		en: "Gabite",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 444,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/48/high",
		},
	},

	evolveFrom: {
		en: "Gible",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gather Up",
		},
		text: {
			en: "Search your discard pile for up to 2 Energy cards, show them to your opponent, and put them into your hand.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Marvelous Shine",
		},
		text: {
			en: "Flip a coin. If heads, put 4 damage counters on 1 of your opponent's Pokémon. If tails, remove 4 damage counters from 1 of your Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
