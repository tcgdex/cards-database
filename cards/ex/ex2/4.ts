import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-4",
	localId: 4,

	// Card informations
	name: {
		en: "Dusclops",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 356,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/4/high",
		},
	},

	evolveFrom: {
		en: "Duskull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Judgement",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Random Curse",
		},
		text: {
			en: "Put a total of 5 damage counters on all Defending Pokémon in any way you like.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
