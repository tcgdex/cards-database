import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-8",
	localId: 8,

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
			en: "https://assets.tcgdex.net/en/pop/pop9/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/8/high",
		},
	},

	evolveFrom: {
		en: "Gible",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Burrow",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to Gabite by attacks during your opponent's next turn.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Distorted Wave",
		},
		text: {
			en: "Before doing damage, remove 2 damage counters from the Defending Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card
