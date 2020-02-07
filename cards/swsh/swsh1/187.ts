import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-187",
	localId: 187,

	// Card informations
	name: {
		en: "Dhelmise V",
	},

	hp: 220,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/187/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/187/high.png",
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
			Type.GRASS
		],
		name: {
			en: "Anchor Anger",
		},
		text: {
			en: "If any of your Grass Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 90 more damage.",
		},
		damage: "30+"
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Hammer",
		},
		text: {
			en: "During your next turn, this Pokémon can't use Giga Hammer.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

