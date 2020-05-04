import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-158",
	localId: 158,

	// Card informations
	name: {
		en: "Noibat",
		fr: "Sonistrelle",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 714,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/158/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/158/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/158/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/158/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "0313",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d’Air",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
