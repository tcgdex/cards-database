import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-41",
	localId: 41,

	// Card informations
	name: {
		en: "Palpitoad",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 536,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/41/high",
		},
	},

	evolveFrom: {
		en: "Tympole",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Mud Shot",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Round",
		},
		text: {
			en: "Does 20 damage times the number of your Pokémon that have the Round attack.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
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
