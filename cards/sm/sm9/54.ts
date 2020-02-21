import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-54",
	localId: 54,

	// Card informations
	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 29,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/54/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/54/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 146,
		name: "miki kudo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
		},
		text: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
