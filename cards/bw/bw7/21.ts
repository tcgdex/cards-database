import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-21",
	localId: 21,

	// Card informations
	name: {
		en: "Numel",
		fr: "Chamallot",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 322,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/21/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/21/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flamme",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
