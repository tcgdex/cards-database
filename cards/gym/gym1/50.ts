import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-50",
	localId: 50,

	// Card informations
	name: {
		en: "Lt. Surge's Magnemite",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 81,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Removal Pulse",
		},
		text: {
			en: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Confusion Pulse",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
