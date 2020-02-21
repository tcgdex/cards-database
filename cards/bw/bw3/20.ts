import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-20",
	localId: 20,

	// Card informations
	name: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 636,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/20/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/20/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
