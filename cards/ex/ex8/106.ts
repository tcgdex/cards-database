import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-106",
	localId: 106,

	// Card informations
	name: {
		en: "Latios Star",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Miraculous Light",
		},
		text: {
			en: "Remove 1 damage counter and all Special Conditions from Latios Star.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.PSYCHIC,
			Type.LIGHTNING
		],
		name: {
			en: "Shining Star",
		},
		text: {
			en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, discard all Energy cards attached to Latios Star and this attack does 50 damage plus 100 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
