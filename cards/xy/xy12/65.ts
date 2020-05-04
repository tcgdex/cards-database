import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-65",
	localId: 65,

	// Card informations
	name: {
		en: "M Pidgeot-EX",
		fr: "M-Roucarnage-EX",
	},

	hp: 220,

	type: [
		Type.COLORLESS,
	],

	dexId: 18,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/65/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/65/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/65/high",
		},
	},

	evolveFrom: {
		en: "Pidgeot-EX",
		fr: "Roucarnage-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Cyclone",
			fr: "Mach Cyclone",
		},
		text: {
			en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
