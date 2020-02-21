import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-31",
	localId: 31,

	// Card informations
	name: {
		en: "Charmeleon",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/31/high",
		},
	},

	evolveFrom: {
		en: "Charmander",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Damage Burn",
		},
		text: {
			en: "If the Defending Pokémon has already any damage counters on it, this attack does 40 damage plus 20 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
