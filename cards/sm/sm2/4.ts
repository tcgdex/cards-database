import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-4",
	localId: 4,

	// Card informations
	name: {
		en: "Petilil",
		fr: "Chlorobule",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 548,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/4/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/4/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Blot",
			fr: "Pâté",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
