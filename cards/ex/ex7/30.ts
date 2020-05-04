import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-30",
	localId: 30,

	// Card informations
	name: {
		en: "Dark Ariados",
	},

	hp: 70,

	type: [
		Type.GRASS,
		Type.DARKNESS,
	],

	dexId: 168,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/30/high",
		},
	},

	evolveFrom: {
		en: "Spinarak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Koizumi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Super Poison Breath",
		},
		text: {
			en: "Each Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Breaking Impact",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage for each Colorless Energy in that Pokémon's Retreat Cost (after applying effects to the Retreat Cost). (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
