import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-89",
	localId: 89,

	// Card informations
	name: {
		en: "Haxorus",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 612,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/89/high",
		},
	},

	evolveFrom: {
		en: "Fraxure",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guillotine",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stunning Uppercut",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is now Paralyzed. If both of them are tails, this attack does nothing.",
		},
		damage: 80
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
