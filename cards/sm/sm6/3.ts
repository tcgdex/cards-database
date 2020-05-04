import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-3",
	localId: 3,

	// Card informations
	name: {
		en: "Snover",
		fr: "Blizzi",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 459,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Shard",
			fr: "Éclats Glace",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Fighting Pokémon, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
