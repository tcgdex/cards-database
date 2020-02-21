import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-77",
	localId: 77,

	// Card informations
	name: {
		en: "Ferroseed",
		fr: "Grindur",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 597,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/77/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/77/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/77/high",
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
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Self Destruct",
			fr: "Destruction",
		},
		text: {
			en: "This Pokémon does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige 60 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
