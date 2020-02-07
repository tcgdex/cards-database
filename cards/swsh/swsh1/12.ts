import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Thwackey",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/12/high.png",
		},
	},

	evolveFrom: {
		en: "Grookey",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Taunt",
		},
		text: {
			en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Double Hit",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage for each heads.",
		},
		damage: "60×"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

