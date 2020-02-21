import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-25",
	localId: 25,

	// Card informations
	name: {
		en: "Light Machamp",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/25/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Beatdown",
		},
		text: {
			en: "If the Defending Pokémon has Dark in its name or is a Pokémon, flip a coin. If heads, this attack does 100 damage instead of 50.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
