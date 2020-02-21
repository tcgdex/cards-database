import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-40",
	localId: 40,

	// Card informations
	name: {
		en: "Regirock",
		fr: "Regirock",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 377,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/40/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/40/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Unyielding Rock",
			fr: "Roc Indestructible",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
