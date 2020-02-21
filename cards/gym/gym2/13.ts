import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-13",
	localId: 13,

	// Card informations
	name: {
		en: "Misty's Gyarados",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/13/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 654,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Rebellion",
		},
		text: {
			en: "Whenever Misty's Gyarados attacks, flip 2 coins. If both of them are tails, that attack does nothing. Instead, shuffle Misty's Gyarados and all cards attached to it into your deck. (This power works even if Misty's Gyarados is Confused.)",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Tidal Wave",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
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
