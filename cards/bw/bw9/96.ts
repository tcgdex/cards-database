import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-96",
	localId: 96,

	// Card informations
	name: {
		en: "Staravia",
		fr: "Étourvol",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 397,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/96/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/96/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/96/high",
		},
	},

	evolveFrom: {
		en: "Starly",
		fr: "Étourmi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



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
			en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
