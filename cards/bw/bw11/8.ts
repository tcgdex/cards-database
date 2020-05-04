import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-8",
	localId: 8,

	// Card informations
	name: {
		en: "Serperior",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 497,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/8/high",
		},
	},

	evolveFrom: {
		en: "Servine",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "hatachu",

	abilities: [{
		id: 372,
		type: AbilityType.TALENT,
		name: {
			en: "Royal Heal",
		},
		text: {
			en: "At any time between turns, heal 10 damage from each of your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Tornado",
		},
		text: {
			en: "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
