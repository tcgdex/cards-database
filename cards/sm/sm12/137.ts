import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-137",
	localId: 137,

	// Card informations
	name: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 27,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/137/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/137/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/137/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/137/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 98,
		name: "ryoma uratsuka"
	},



	attacks: [{
		name: {
			en: "Run Around",
			fr: "Course Effrénée",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

