import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-17",
	localId: 17,

	// Card informations
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 131,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/17/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/17/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Cleanse Away",
			fr: "Soin Groupé",
		},
		text: {
			en: "Heal 30 damage from each of your Benched Pokémon.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
