import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-62",
	localId: 62,

	// Card informations
	name: {
		en: "Dark Octillery",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 224,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/62/high",
		},
	},

	evolveFrom: {
		en: "Remoraid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin-ichi Yoshida",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ink Blast",
		},
		text: {
			en: "This attack does 20 damage plus 10 more damage for each Energy attached to Dark Octillery but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Tentacle Wrap",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, during your opponent's next turn, your opponent pays more to retreat the Defending Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
