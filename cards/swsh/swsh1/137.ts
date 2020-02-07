import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-137",
	localId: 137,

	// Card informations
	name: {
		en: "Copperajah",
	},

	hp: 190,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/137/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/137/high.png",
		},
	},

	evolveFrom: {
		en: "Cufant",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Dig Drain",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Muscular Nose",
		},
		text: {
			en: "If this Pokémon has 8 or more damage counters on it, this attack does nothing.",
		},
		damage: 220
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

