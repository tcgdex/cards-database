import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-4",
	localId: 4,

	// Card informations
	name: {
		en: "Shroomish",
		fr: "Balignon",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 285,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/4/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/4/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Absorb",
			fr: "Vol-Vie",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
