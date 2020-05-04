import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-117",
	localId: 117,

	// Card informations
	name: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 399,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/117/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/117/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "PLANETA",

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Régénération α",
		},
		text: {
			fr: "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drench",
			fr: "Trempage",
		},
		text: {
			en: "If this Pokémon has any Water Energy attached to it, this attack does 20 more damage.",
			fr: "Si de l'Énergie Water est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
