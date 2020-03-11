import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-28",
	localId: 28,

	// Card informations
	name: {
		en: "M Ampharos-EX",
		fr: "M Pharamp-EX",
	},

	hp: 220,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/28/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/28/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/28/high",
		},
	},

	evolveFrom: {
		en: "Ampharos-EX",
		fr: "Pharamp-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Exavolt",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "You may do 50 more damage and leave your opponent's Active Pokémon Paralyzed. If you do, this Pokémon does 30 damage to itself.",
		},
		damage: 120
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Exavolt",
		},
		text: {
			fr: "Vous pouvez infliger 50 dégâts supplémentaires et laisser le Pokémon Actif de votre adversaire Paralysé. Dans ce cas, ce Pokémon s'inflige 30 dégâts.",
		},
		damage: "120+"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
