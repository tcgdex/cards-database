import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-50",
	localId: 50,

	// Card informations
	name: {
		en: "Thundurus",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 642,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charge",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Disaster Volt",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
