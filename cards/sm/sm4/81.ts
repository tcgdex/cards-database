import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-81",
	localId: 81,

	// Card informations
	name: {
		en: "Starly",
		fr: "Étourmi",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 396,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/81/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/81/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "miki kudo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bug Search",
			fr: "Recherche Insecte",
		},
		text: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flap",
			fr: "Battement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
