import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-78",
	localId: 78,

	// Card informations
	name: {
		en: "Marowak",
		fr: "Ossatueur",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/78/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/78/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/78/high",
		},
	},

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sharpshooting",
			fr: "Tir de Précision",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Bone Windmill",
			fr: "Moulin Osseux",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-EX, switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
