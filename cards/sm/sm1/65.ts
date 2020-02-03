import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-65",
	localId: 65,

	// Card informations
	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 790,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/65/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/65/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/65/high.png",
		},
	},

	evolveFrom: {
		en: "Cosmog",
		fr: "Cosmog",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Teleport",
			fr: "Téléport",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

