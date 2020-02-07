import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-103",
	localId: 103,

	// Card informations
	name: {
		en: "Claydol",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/103/high.png",
		},
	},

	evolveFrom: {
		en: "Baltoy",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psybeam",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Confused.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Explosion",
		},
		text: {
			en: "This Pokémon also does 120 damage to itself.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

