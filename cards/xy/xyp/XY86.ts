import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY86",
	localId: "XY86",

	// Card informations
	name: {
		en: "M Blaziken-EX",
		fr: "M Braségali-eEX",
	},

	hp: 210,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY86/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY86/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY86/high",
		},
	},

	evolveFrom: {
		en: "Blaziken-EX",
		fr: "Braségali-eEX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moonsault Blaze",
			fr: "Brasier Sélénite",
		},
		text: {
			en: "During your next turn, this Pokémon's Moonsault Blaze attack does 100 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Brasier Sélénite de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
