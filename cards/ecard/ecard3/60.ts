import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-60",
	localId: 60,

	// Card informations
	name: {
		en: "Golbat",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 42,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/60/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sound Wave",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strength in Numbers",
		},
		text: {
			en: "This attack does 30 damage plus 10 more damage for each Zubat, Golbat, and Crobat on your bench.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
