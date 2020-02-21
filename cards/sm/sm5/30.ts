import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-30",
	localId: 30,

	// Card informations
	name: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/30/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/30/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
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
			Type.WATER
		],
		name: {
			en: "Icy Snow",
			fr: "Verglas",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
