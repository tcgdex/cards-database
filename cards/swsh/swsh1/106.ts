import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Mudsdale",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/106/high.png",
		},
	},

	evolveFrom: {
		en: "Mudbray",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Double Impact",
		},
		text: {
			en: "Flip 2 coins. This attack does 120 damage for each heads.",
		},
		damage: "120×"
	}],

	weaknesses: [{
		type: Type.GRASS,
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

