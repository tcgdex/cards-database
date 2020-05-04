import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-2",
	localId: 2,

	dexId: 315,

	// Card informations
	name: {
		en: "Roselia",
		fr: "Rosélia",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/2/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/2/low",
		}
	},

	evolveTo: [{
		en: "Roserade",
		fr: "Roserade",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: "sowsow",

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Absorb",
			fr: "Vole-Vie",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
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
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
