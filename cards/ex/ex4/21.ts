import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-21",
	localId: 21,

	// Card informations
	name: {
		en: "Team Magma's Mightyena",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 262,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Overrun",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite Off",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 40 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
