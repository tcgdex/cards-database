import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-58",
	localId: 58,

	// Card informations
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 67,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/58/high",
		},
	},

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Karate Chop",
			fr: "Poing-Karaté",
		},
		text: {
			en: "This attack does 60 damage minus 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 60 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Submission",
			fr: "Sacrifice",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
