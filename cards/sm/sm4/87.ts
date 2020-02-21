import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Bunnelby",
		fr: "Sapereau",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 659,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/87/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/87/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
