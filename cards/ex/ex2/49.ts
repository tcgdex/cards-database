import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-49",
	localId: 49,

	// Card informations
	name: {
		en: "Nuzleaf",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 274,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/49/high",
		},
	},

	evolveFrom: {
		en: "Seedot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Stun Spore",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Wind",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
