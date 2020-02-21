import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-28",
	localId: 28,

	// Card informations
	name: {
		en: "Forretress",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/28/high",
		},
	},

	evolveFrom: {
		en: "Pineco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Double Metal Ball",
		},
		text: {
			en: "Put 2 damage counters on each Defending Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Backspin",
		},
		text: {
			en: "After your attack, you may discard 1 Energy card attached to Forretress. If you do, switch Forretress with 1 of your Benched Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
