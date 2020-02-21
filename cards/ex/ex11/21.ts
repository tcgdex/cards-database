import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-21",
	localId: 21,

	// Card informations
	name: {
		en: "Holon's Electrode",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/21/high",
		},
	},

	evolveFrom: {
		en: "Holon's Voltorb",
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
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dazzle Blast",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
