import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV30",
	localId: "SV30",

	// Card informations
	name: {
		en: "Beldum",
		fr: "Terhal",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV30/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV30/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV30/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Core Beam",
			fr: "Faisceau Central",
		},
		text: {
			en: "Discard a Metal Energy from this Pokémon.",
			fr: "Défaussez une Énergie Metal de ce Pokémon.",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

