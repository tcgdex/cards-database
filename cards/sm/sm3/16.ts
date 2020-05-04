import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-16",
	localId: 16,

	// Card informations
	name: {
		en: "Wimpod",
		fr: "Sovkipou",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 767,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/16/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/16/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 792,
		type: AbilityType.TALENT,
		name: {
			en: "Wimp Out",
			fr: "Escampette",
		},
		text: {
			en: "During your first turn, this Pokémon has no Retreat Cost.",
			fr: "Pendant votre premier tour, ce Pokémon n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
