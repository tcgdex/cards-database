import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-51",
	localId: 51,

	// Card informations
	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 2,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/51/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/51/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/51/high.png",
		},
	},

	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leech Seed",
			fr: "Vampigraine",
		},
		text: {
			en: "Remove 1 damage counter from Ivysaur.",
			fr: "Retirez à Herbizarre 1 marqueur de dégât.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'herbe",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

