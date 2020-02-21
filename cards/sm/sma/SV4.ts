import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV4",
	localId: "SV4",

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
			en: "https://assets.tcgdex.net/en/sm/sma/SV4/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV4/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},

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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
