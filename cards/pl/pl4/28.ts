import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-28",
	localId: 28,

	// Card informations
	name: {
		en: "Rapidash",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 78,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/28/high",
		},
	},

	evolveFrom: {
		en: "Ponyta",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Lee HyunJung",

	abilities: [{
		id: 882,
		type: AbilityType.POKEBODY,
		name: {
			en: "Wild Guard",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Rapidash by your opponent's Pokémon SP.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Mane",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rising Lunge",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
