import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-83",
	localId: 83,

	// Card informations
	name: {
		en: "Slugma",
		fr: "Limagma",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 218,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/83/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/83/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Steady Firebreathing",
			fr: "Crachage de feu régulier",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
			fr: "Plaquage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
