import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-41",
	localId: 41,

	// Card informations
	name: {
		en: "Lairon",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 305,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/41/high",
		},
	},

	evolveFrom: {
		en: "Aron",
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
			Type.COLORLESS
		],
		name: {
			en: "Iron Defense",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Lairon during your opponent's next turn.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
