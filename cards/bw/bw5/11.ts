import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-11",
	localId: 11,

	// Card informations
	name: {
		en: "Accelgor",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 617,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/11/high",
		},
	},

	evolveFrom: {
		en: "Shelmet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Hammer In",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Deck and Cover",
		},
		text: {
			en: "The Defending Pokémon is now Paralyzed and Poisoned. Shuffle this Pokémon and all cards attached to it into your deck.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
