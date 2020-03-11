import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-95",
	localId: 95,

	// Card informations
	name: {
		en: "Black Kyurem-EX",
		fr: "Kyurem Noir-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/95/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/95/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Shizurow",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Black Ballista",
			fr: "Baliste Noire",
		},
		text: {
			en: "Discard 3 Energy attached to this Pokémon.",
			fr: "Défaussez 3 Énergies attachées à ce Pokémon.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
