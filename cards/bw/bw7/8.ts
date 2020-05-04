import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-8",
	localId: 8,

	// Card informations
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/8/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/8/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Horn",
			fr: "Giga Corne",
		},
		text: {
			en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
