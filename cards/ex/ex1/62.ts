import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-62",
	localId: 62,

	// Card informations
	name: {
		en: "Phanpy",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 231,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stampede",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Trembler",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each Defending Pokémon, and each Defending Pokémon is now Paralyzed.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
