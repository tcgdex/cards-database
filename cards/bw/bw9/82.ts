import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-82",
	localId: 82,

	// Card informations
	name: {
		en: "Dragonair",
		fr: "Draco",
	},

	hp: 70,

	type: [
		Type.DRAGON,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/82/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/82/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/82/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "TOKIYA",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
