import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-101",
	localId: 101,

	// Card informations
	name: {
		en: "Charmander",
		fr: "Charmander",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 4,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/101/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/101/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/101/high",
		},
	},

	evolveFrom: {
		fr: "Salamèche",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Ember",
			fr: "Flammèche",
		},
		text: {
			en: "Discard a fire Energy attached to Charmander.",
			fr: "Défaussez une Énergie Fire attachée à Salamèche.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
