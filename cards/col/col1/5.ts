import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Forretress",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/5/high",
		},
	},

	evolveFrom: {
		en: "Pineco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Mirror Shot",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Everyone Explode Now",
		},
		text: {
			en: "Does 30 damage times the number of Pineco and Forretress you have in play. This attack does 30 damage to each of your Pineco and Forretress in play.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
