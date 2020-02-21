import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-44",
	localId: 44,

	// Card informations
	name: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 562,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/44/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/44/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Perplex",
			fr: "Affolement",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
