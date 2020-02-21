import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-69",
	localId: 69,

	// Card informations
	name: {
		en: "Hitmonchan",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 107,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Dodge",
		},
		text: {
			en: "If Hitmonchan would be damaged by an attack during your opponent's next turn, flip a coin. If heads, prevent that attack's damage done to Hitmonchan. (Any other effects of attacks still happen.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Supersonic Jab",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
