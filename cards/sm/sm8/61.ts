import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-61",
	localId: 61,

	// Card informations
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 613,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "0313",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Secondary Chills",
			fr: "Tremblements Secondaires",
		},
		text: {
			en: "You can use this attack only if you go second, and only on your first turn. Your opponent's Active Pokémon is now Paralyzed.",
			fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
