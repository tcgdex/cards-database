import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-2",
	localId: 2,

	// Card informations
	name: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 11,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/2/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/2/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/2/high",
		},
	},

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shed Skin",
			fr: "Mue",
		},
		text: {
			en: "Heal 40 damage from this Pokémon.",
			fr: "Soignez 40 dégâts à ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
