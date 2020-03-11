import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-23",
	localId: 23,

	// Card informations
	name: {
		en: "Palpitoad",
		fr: "Batracné",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 536,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/23/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/23/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/23/high",
		},
	},

	evolveFrom: {
		en: "Tympole",
		fr: "Tritonde",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Round",
			fr: "Chant Canon",
		},
		text: {
			en: "Does 20 damage times the number of your Pokémon that have the Round attack.",
			fr: "Inflige 20 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
