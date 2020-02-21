import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-65",
	localId: 65,

	// Card informations
	name: {
		en: "Popplio",
		fr: "Otaquin",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 728,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/65/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/65/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Blot",
			fr: "Pâté",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
