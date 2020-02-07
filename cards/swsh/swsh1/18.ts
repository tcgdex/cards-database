import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Dottler",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/18/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/18/high.png",
		},
	},

	evolveFrom: {
		en: "Blipbug",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reflect",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

