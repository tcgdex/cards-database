import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-29",
	localId: 29,

	// Card informations
	name: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 608,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/29/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/29/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/29/high",
		},
	},

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sachiko Adachi",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fireworks",
			fr: "Feu d’Artifice",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
