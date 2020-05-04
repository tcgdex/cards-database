import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-34",
	localId: 34,

	// Card informations
	name: {
		en: "Dark Flaaffy",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 180,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/34/high",
		},
	},

	evolveFrom: {
		en: "Mareep",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "High Voltage",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Stun Wave",
		},
		text: {
			en: "If the Defending Pokémon has a Pokémon Power, that power stops working until the end of your next turn.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
