import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-123",
	localId: 123,

	// Card informations
	name: {
		en: "Roselia",
		fr: "Roselia",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 315,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/123/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/123/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Vine Slap",
			fr: "Gifle de liane",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Spit Poison",
			fr: "Crache-venin",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
