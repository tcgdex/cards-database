import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-10",
	localId: 10,

	// Card informations
	name: {
		en: "Marowak δ",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
		Type.METAL,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/10/high",
		},
	},

	evolveFrom: {
		en: "Cubone",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.METAL
		],
		name: {
			en: "Energy Bone",
		},
		text: {
			en: "Choose a number of your opponent's Pokémon up to the amount of Energy attached to Marowak. This attack does 20 damage to each of them.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Crusher",
		},
		text: {
			en: "If the Defending Pokémon is Metal Pokémon, this attack's base damage is 90.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
