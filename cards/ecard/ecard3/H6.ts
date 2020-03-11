import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H6",
	localId: "H6",

	// Card informations
	name: {
		en: "Dewgong",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 87,


	evolveFrom: {
		en: "Seel",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Freeze Lock",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to his or her Active Pokémon during his or her next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crushing Ice",
		},
		text: {
			en: "This attack does 40 damage plus 10 more damage for each Energy in the Defending Pokémon's Retreat Cost. Damage is calculated using the Defending Pokémon's Retreat Cost after applying effects to the Retreat Cost.",
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
