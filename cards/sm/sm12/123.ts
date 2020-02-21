import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-123",
	localId: 123,

	// Card informations
	name: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 744,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/123/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/123/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Roar",
			fr: "Hurlement",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
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
