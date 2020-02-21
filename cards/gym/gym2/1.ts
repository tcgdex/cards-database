import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-1",
	localId: 1,

	// Card informations
	name: {
		en: "Blaine's Arcanine",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/1/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
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
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Tackle",
		},
		text: {
			en: "Blaine's Arcanine does 10 damage to itself.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Firestorm",
		},
		text: {
			en: "Discard 3 Energy cards attached to Blaine's Arcanine in order to use this attack.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
