import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-123",
	localId: 123,

	// Card informations
	name: {
		en: "Pidove",
		fr: "Poichigeon",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 519,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/123/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/123/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Wind",
			fr: "Coupe-Vent",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
