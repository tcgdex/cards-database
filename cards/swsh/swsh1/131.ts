import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-131",
	localId: 131,

	// Card informations
	name: {
		en: "Ferrothorn",
	},

	hp: 130,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/131/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/131/high.png",
		},
	},

	evolveFrom: {
		en: "Ferroseed",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Triple Smash",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage for each heads.",
		},
		damage: "30×"
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Energy Slap",
		},
		text: {
			en: "You may move all Energy from this Pokémon to 1 of your Benched Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
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

