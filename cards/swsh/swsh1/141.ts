import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-141",
	localId: 141,

	// Card informations
	name: {
		en: "Snorlax V",
	},

	hp: 220,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/141/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/141/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],





	attacks: [{
		name: {
			en: "V rule",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Falling Down",
		},
		text: {
			en: "This Pokémon is now Asleep.",
		},
		damage: 170
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

