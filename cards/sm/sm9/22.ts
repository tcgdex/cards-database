import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-22",
	localId: 22,

	// Card informations
	name: {
		en: "Squirtle",
		fr: "Carapuce",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 7,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/22/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/22/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",

	abilities: [{
		id: 1269,
		type: AbilityType.TALENT,
		name: {
			en: "Floating Shell",
			fr: "Carapace Flottante",
		},
		text: {
			en: "If you have a Stadium card in play, this Pokémon has no Retreat Cost.",
			fr: "Si vous avez une carte Stade en jeu, ce Pokémon n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
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
