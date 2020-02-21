import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-92",
	localId: 92,

	// Card informations
	name: {
		en: "Altaria",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/92/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Dive",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Cleave",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
