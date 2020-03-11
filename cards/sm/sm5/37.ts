import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-37",
	localId: 37,

	// Card informations
	name: {
		en: "Snover",
		fr: "Blizzi",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 459,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.WATER,
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
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
