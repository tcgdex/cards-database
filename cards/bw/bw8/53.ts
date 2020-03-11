import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-53",
	localId: 53,

	// Card informations
	name: {
		en: "Zubat",
		fr: "Nosferapti",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 41,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/53/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/53/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",

	abilities: [{
		id: 132,
		type: AbilityType.TALENT,
		name: {
			en: "Free Flight",
			fr: "Vol Gratuit",
		},
		text: {
			en: "If this Pokémon has no Energy attached to it, this Pokémon has no Retreat Cost.",
			fr: "Si aucune Énergie n'est attachée à ce Pokémon, ce Pokémon n'a pas de coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
