import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-64",
	localId: 64,

	// Card informations
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 453,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/64/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/64/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Paralyzing Jab",
			fr: "Piqûre Paralysante",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
