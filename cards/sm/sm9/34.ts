import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-34",
	localId: 34,

	// Card informations
	name: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 74,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/34/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/34/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Self-Destruct",
			fr: "Destruction",
		},
		text: {
			en: "This Pokémon does 60 damage to itself.",
			fr: "Ce Pokémon s’inflige 60 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
