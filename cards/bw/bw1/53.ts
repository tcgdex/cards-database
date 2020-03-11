import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-53",
	localId: 53,

	// Card informations
	name: {
		en: "Whirlipede",
		fr: "Scobolide",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 544,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/53/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/53/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/53/high",
		},
	},

	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
