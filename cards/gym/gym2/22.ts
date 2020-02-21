import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-22",
	localId: 22,

	// Card informations
	name: {
		en: "Brock's Dugtrio",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/22/high",
		},
	},

	evolveFrom: {
		en: "Diglett",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Lie Low",
		},
		text: {
			en: "All damage done to Brock's Dugtrio during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Earthdrill",
		},
		text: {
			en: "This attack can't be used unless Brock's Dugtrio used its Lie Low attack last turn.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
