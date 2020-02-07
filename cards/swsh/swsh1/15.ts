import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Rillaboom",
	},

	hp: 190,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/15/high.png",
		},
	},

	evolveFrom: {
		en: "Thwackey",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Drum Roll",
		},
		text: {
			en: "This attack also does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 90
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Drum Beating",
		},
		text: {
			en: "During your next turn, this Pokémon can't use Drum Beating.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

