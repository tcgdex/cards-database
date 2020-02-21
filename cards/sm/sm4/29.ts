import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-29",
	localId: 29,

	// Card informations
	name: {
		en: "Shellos",
		fr: "Sancoki",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 422,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/29/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/29/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Regeneration",
			fr: "Rétablissement",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud’Boue",
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
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
