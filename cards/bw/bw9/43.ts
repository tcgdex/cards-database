import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-43",
	localId: 43,

	// Card informations
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 32,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/43/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/43/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hit Back",
			fr: "Réplique",
		},
		text: {
			en: "If this Pokémon has no damage counters on it, this attack does nothing.",
			fr: "Si ce Pokémon n'a aucun marqueur de dégâts, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
