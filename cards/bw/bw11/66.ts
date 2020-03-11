import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-66",
	localId: 66,

	// Card informations
	name: {
		en: "Sigilyph",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 561,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",

	abilities: [{
		id: 148,
		type: AbilityType.TALENT,
		name: {
			en: "Safeguard",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
		},
		text: {
			en: "Does 10 more damage for each Energy attached to the Defending Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
