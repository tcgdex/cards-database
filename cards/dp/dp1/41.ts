import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-41",
	localId: 41,

	// Card informations
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/41/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/41/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Countercharge",
			fr: "Contre-charge",
		},
		text: {
			en: "Flip a coin. If heads, move all damage counters from Wobbuffet to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, déplacez tous les marqueurs de dégât de Qulbutoké sur le Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
