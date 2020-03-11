import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-2",
	localId: 2,

	// Card informations
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	hp: 40,

	type: [
		Type.DRAGON,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/2/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/2/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Hypnotic Gaze",
			fr: "Regard Hypnotique",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
