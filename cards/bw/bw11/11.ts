import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-11",
	localId: 11,

	// Card informations
	name: {
		en: "Swadloon",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 541,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/11/high",
		},
	},

	evolveFrom: {
		en: "Sewaddle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "String Shot",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
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
