import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-71",
	localId: 71,

	// Card informations
	name: {
		en: "Galvantula",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/71/high.png",
		},
	},

	evolveFrom: {
		en: "Joltik",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Volt Wave",
		},
		text: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

