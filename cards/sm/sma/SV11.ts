import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV11",
	localId: "SV11",

	// Card informations
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 656,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV11/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV11/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV11/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

	abilities: [{
		id: 966,
		type: AbilityType.TALENT,
		name: {
			en: "Frubbles",
			fr: "Grebulles",
		},
		text: {
			en: "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
			fr: "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flop",
			fr: "Flop",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

