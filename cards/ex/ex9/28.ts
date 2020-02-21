import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-28",
	localId: 28,

	// Card informations
	name: {
		en: "Grovyle",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 253,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/28/high",
		},
	},

	evolveFrom: {
		en: "Treecko",
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
			Type.GRASS
		],
		name: {
			en: "Tail Shake",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
