import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-38",
	localId: 38,

	// Card informations
	name: {
		en: "Duskull",
		fr: "Skelénox",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 355,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/38/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/38/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Revival",
			fr: "Réapparition",
		},
		text: {
			en: "Put a Basic Pokémon from your opponent's discard pile onto his or her Bench.",
			fr: "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sneaky Placement",
			fr: "Placement Vicieux",
		},
		text: {
			en: "Put 1 damage counter on your opponent's Active Pokémon.",
			fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
