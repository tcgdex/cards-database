import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-26",
	localId: 26,

	// Card informations
	name: {
		en: "Pignite",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 499,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/26/high",
		},
	},

	evolveFrom: {
		en: "Tepig",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
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
