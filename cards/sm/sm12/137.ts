import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm12/137/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/137/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/137/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "ryoma uratsuka",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
