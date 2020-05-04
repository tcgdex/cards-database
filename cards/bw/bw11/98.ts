import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-98",
	localId: 98,

	// Card informations
	name: {
		en: "Zweilous",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 634,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/98/high",
		},
	},

	evolveFrom: {
		en: "Deino",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Dragon Claw",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
