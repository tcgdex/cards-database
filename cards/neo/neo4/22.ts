import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-22",
	localId: 22,

	// Card informations
	name: {
		en: "Light Dragonair",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/22/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Healing Light",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon that has any damage counters on it.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Protective Wave",
		},
		text: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Light Dragonair.",
		},
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
