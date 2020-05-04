import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-5",
	localId: 5,

	// Card informations
	name: {
		en: "Snivy",
		fr: "Vipélierre",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 495,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/5/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/5/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.GRASS
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
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
