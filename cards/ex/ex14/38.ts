import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-38",
	localId: 38,

	// Card informations
	name: {
		en: "Marshtomp",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 259,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/38/high",
		},
	},

	evolveFrom: {
		en: "Mudkip",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hug",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
