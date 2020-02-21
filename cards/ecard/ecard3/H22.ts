import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H22",
	localId: "H22",

	// Card informations
	name: {
		en: "Piloswine",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H22/high",
		},
	},

	evolveFrom: {
		en: "Swinub",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Freezing Breath",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trample",
		},
		text: {
			en: "For each Benched Pokémon (yours and your opponent's), flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
