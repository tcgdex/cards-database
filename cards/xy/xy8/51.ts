import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-51",
	localId: 51,

	// Card informations
	name: {
		en: "Magnemite",
		fr: "Magnéti",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 81,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/51/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/51/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",

	abilities: [{
		id: 1426,
		type: AbilityType.TALENT,
		name: {
			en: "Sparkling Induction",
			fr: "Induction Étincelante",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, its Retreat Cost is Colorless less for each Magnemite on your Bench.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, son Coût de Retraite est diminué de Colorless pour chaque Magnéti sur votre Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
