import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-20",
	localId: 20,

	// Card informations
	name: {
		en: "Team Magma's Lairon",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 305,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
