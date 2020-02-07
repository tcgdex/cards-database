import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-113",
	localId: 113,

	// Card informations
	name: {
		en: "Grapploct",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/113/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/113/high.png",
		},
	},

	evolveFrom: {
		en: "Clobbopus",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Octolock",
		},
		text: {
			en: "Until this Grapploct leaves the Active Spot, the Defending Pokémon's attacks cost ColorlessColorless more, and the Defending Pokémon can't retreat. This effect can't be applied more than once.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Tough Swing",
		},
		text: {
			en: "This attack’s damage isn’t affected by Resistance.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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

