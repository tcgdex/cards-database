import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-89",
	localId: 89,

	// Card informations
	name: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 255,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/89/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/89/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 47,
		name: "Hiroki Fuchino"
	},



	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Singe",
			fr: "Roussir",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
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
