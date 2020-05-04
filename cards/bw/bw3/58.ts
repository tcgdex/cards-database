import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-58",
	localId: 58,

	// Card informations
	name: {
		en: "Litwick",
		fr: "Funécire",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 607,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/58/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/58/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Teleportation Burst",
			fr: "Téléportation Explosive",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
