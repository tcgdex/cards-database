import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-40",
	localId: 40,

	// Card informations
	name: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 246,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/40/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/40/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
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
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
