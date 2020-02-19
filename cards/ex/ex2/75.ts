import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-75",
	localId: 75,

	// Card informations
	name: {
		en: "Sandshrew",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 27,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/75/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Poison Needle",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card

