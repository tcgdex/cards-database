import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-66",
	localId: 66,

	// Card informations
	name: {
		en: "Wooper",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 194,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Whap",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Deep Dive",
		},
		text: {
			en: "Flip 3 coins. For each heads, remove 1 damage counter from Wooper.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
