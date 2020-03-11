import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-80",
	localId: 80,

	// Card informations
	name: {
		en: "Whismur",
		fr: "Chuchmur",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 293,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/80/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/80/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Round",
			fr: "Chant Canon",
		},
		text: {
			en: "This attack does 10 damage times the number of your Pokémon that have the Round attack.",
			fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
