import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-68",
	localId: 68,

	// Card informations
	name: {
		en: "Glameow",
		fr: "Chaglam",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 431,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/68/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/68/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Captivate",
			fr: "Séduction",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon.",
			fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
