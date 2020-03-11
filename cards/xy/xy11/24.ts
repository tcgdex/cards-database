import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-24",
	localId: 24,

	// Card informations
	name: {
		en: "Pyroar BREAK",
		fr: "Némélios TURBO",
	},

	hp: 160,

	type: [
		Type.FIRE,
	],

	dexId: 668,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/24/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/24/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/24/high",
		},
	},

	evolveFrom: {
		en: "Pyroar",
		fr: "Némélios",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Kaiser Tackle",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "This Pokémon does 50 damage to itself.",
		},
		damage: 180
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			fr: "Charge Impériale",
		},
		text: {
			fr: "Ce Pokémon s’inflige 50 dégâts.",
		},
		damage: 180
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
