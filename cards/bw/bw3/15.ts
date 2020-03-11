import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-15",
	localId: 15,

	// Card informations
	name: {
		en: "Victini",
		fr: "Victini",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/15/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/15/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "V-create",
			fr: "Coup Victoire",
		},
		text: {
			en: "If you have 4 or fewer Benched Pokémon, this attack does nothing.",
			fr: "Si vous avez 4 Pokémon de Banc ou moins, cette attaque ne fait rien.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
