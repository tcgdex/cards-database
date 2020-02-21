import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-28",
	localId: 28,

	// Card informations
	name: {
		en: "Dragonair δ",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/28/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
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
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
		},
		damage: 40
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
