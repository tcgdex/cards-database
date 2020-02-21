import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-26",
	localId: 26,

	// Card informations
	name: {
		en: "Light Piloswine",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/26/high",
		},
	},

	evolveFrom: {
		en: "Swinub",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Over",
		},
		text: {
			en: "If there is a Stadium card in play, you may discard it.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
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
