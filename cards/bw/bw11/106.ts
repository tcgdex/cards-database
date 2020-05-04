import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-106",
	localId: 106,

	// Card informations
	name: {
		en: "Druddigon",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 621,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",

	abilities: [{
		id: 227,
		type: AbilityType.TALENT,
		name: {
			en: "Rough Skin",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Clutch",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 60
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
