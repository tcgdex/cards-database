import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-95",
	localId: 95,

	// Card informations
	name: {
		en: "Aggron ex",
	},

	hp: 150,

	type: [
		Type.METAL,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/95/high",
		},
	},

	evolveFrom: {
		en: "Lairon",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rend",
		},
		text: {
			en: "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 30 more damage.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Surge",
		},
		text: {
			en: "Does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	},{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
