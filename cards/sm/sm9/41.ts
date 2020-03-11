import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-41",
	localId: 41,

	// Card informations
	name: {
		en: "Mareep",
		fr: "Wattouat",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 179,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/41/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/41/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Shock Bolt",
			fr: "Choc’Éclair",
		},
		text: {
			en: "Discard all Lightning Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie Lightning de ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
