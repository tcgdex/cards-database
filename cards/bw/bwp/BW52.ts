import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW52",
	localId: "BW52",

	// Card informations
	name: {
		en: "Lillipup",
		fr: "Ponchiot",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 506,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW52/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW52/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Away",
			fr: "Asticotage",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
