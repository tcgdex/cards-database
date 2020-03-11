import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-36",
	localId: 36,

	// Card informations
	name: {
		en: "Alomomola",
		fr: "Mamanbo",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 594,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Borne Ashore",
			fr: "Ramené au Rivage",
		},
		text: {
			en: "Put a Basic Pokémon from either player's discard pile onto its owner's Bench.",
			fr: "Prenez un Pokémon de base dans la pile de défausse d’un des joueurs et placez-le sur son Banc.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
