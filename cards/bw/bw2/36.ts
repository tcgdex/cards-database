import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-36",
	localId: 36,

	// Card informations
	name: {
		en: "Woobat",
		fr: "Chovsourir",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 527,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/36/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/36/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
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
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
