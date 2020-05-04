import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-90",
	localId: 90,

	// Card informations
	name: {
		en: "Cubone",
		fr: "Osselait",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 104,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/90/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/90/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Focus Energy",
			fr: "Puissance",
		},
		text: {
			en: "During your next turn, this Pokémon's Beat attack's base damage is 80.",
			fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Bataille de ce Pokémon sont de 80.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
