import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-27",
	localId: 27,

	// Card informations
	name: {
		en: "M Slowbro-EX",
		fr: "M-Flagadoss-EX",
	},

	hp: 220,

	type: [
		Type.WATER,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/27/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/27/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/27/high",
		},
	},

	evolveFrom: {
		en: "Slowbro-EX",
		fr: "Flagadoss-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Loll Roll Spin",
			fr: "Tournicote",
		},
		text: {
			en: "This Pokémon is now Confused. During your next turn, this Pokémon's Loll Roll Spin attack does 100 more damage (before applying Weakness and Resistance).",
			fr: "Ce Pokémon est maintenant Confus. Pendant votre prochain tour, l’attaque Tournicote de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
