import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-55",
	localId: 55,

	// Card informations
	name: {
		en: "Misty's Seaking",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 119,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/55/high",
		},
	},

	evolveFrom: {
		en: "Goldeen",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Horn Attack",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Mud Splash",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, choose 1 of them and flip a coin. If heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
