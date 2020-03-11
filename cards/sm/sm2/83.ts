import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-83",
	localId: 83,

	// Card informations
	name: {
		en: "Beldum",
		fr: "Terhal",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Core Beam",
			fr: "Faisceau Central",
		},
		text: {
			en: "Discard a Metal Energy from this Pokémon.",
			fr: "Défaussez une Énergie Metal de ce Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
