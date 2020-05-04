import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-48",
	localId: 48,

	// Card informations
	name: {
		en: "Shelgon",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 372,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/48/high",
		},
	},

	evolveFrom: {
		en: "Bagon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scrunch",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to Shelgon by attacks during your opponent's next turn.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Bump",
		},
		text: {
			en: "If Shelgon has any basic Fire Energy and any basic Water Energy attached to it, this attack does 40 damage plus 20 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
