import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-93",
	localId: 93,

	// Card informations
	name: {
		en: "Latias ex",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mist Ball",
		},
		text: {
			en: "Discard a Fire Energy and a Water Energy attached to Latias ex.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	},{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
