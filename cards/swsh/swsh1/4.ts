import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-4",
	localId: 4,

	// Card informations
	name: {
		en: "Roserade",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/4/high.png",
		},
	},

	evolveFrom: {
		en: "Roselia",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Paralyze Poison",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Poisoned. Flip a coin. If heads, your opponent’s Active Pokémon is also Paralyzed.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Drain",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

