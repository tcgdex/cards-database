import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-48",
	localId: 48,

	// Card informations
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 67,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/48/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/48/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/48/high",
		},
	},

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Last-Chance Chop",
			fr: "Dernière Chance",
		},
		text: {
			en: "If this Pokémon's remaining HP is 10, this attack does 70 more damage.",
			fr: "S'il reste 10 PV à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
