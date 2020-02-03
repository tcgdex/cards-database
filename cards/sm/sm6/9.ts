import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-9",
	localId: 9,

	// Card informations
	name: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 672,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/9/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/9/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/9/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Growth",
			fr: "Croissance",
		},
		text: {
			en: "Attach a Grass Energy card from your hand to this Pokémon.",
			fr: "Attachez une carte Énergie Grass de votre main à ce Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

