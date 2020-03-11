import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV11",
	localId: "SV11",

	// Card informations
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 656,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV11/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV11/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",

	abilities: [{
		id: 966,
		type: AbilityType.TALENT,
		name: {
			en: "Frubbles",
			fr: "Grebulles",
		},
		text: {
			en: "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
			fr: "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flop",
			fr: "Flop",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
