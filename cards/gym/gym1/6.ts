import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Lt. Surge's Electabuzz",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 125,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/6/high.png",
		},
	},

	evolveFrom: {
		en: "Elekid",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Charge",
		},
		text: {
			en: "Take up to 2 Energy cards from your discard pile and attach them to Lt. Surge's Electabuzz",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Discharge",
		},
		text: {
			en: "Discard all Energy cards attach to Lt. Surge's Electabuzz in order to use this attack. Flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage times the number of heads.",
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
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card

