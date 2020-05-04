import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-150",
	localId: 150,

	// Card informations
	name: {
		en: "Dragonair",
		fr: "Draco",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/150/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/150/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/150/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sowsow",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Destructive Whirlpool",
			fr: "Siphon Destructeur",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
