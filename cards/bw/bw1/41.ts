import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-41",
	localId: 41,

	// Card informations
	name: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 522,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/41/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/41/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stomp",
			fr: "Écrasement",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
