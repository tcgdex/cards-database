import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-122",
	localId: 122,

	// Card informations
	name: {
		en: "Drapion",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/122/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/122/high.png",
		},
	},

	evolveFrom: {
		en: "Skorupi",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hard Press",
		},
		text: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
		},
		damage: 80
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Strike",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Poisoned.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

