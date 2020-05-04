import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-13",
	localId: 13,

	// Card informations
	name: {
		en: "Rotom",
		fr: "Motisma",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/13/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/13/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {
			en: "Dual Trans",
			fr: "Double trans",
		},
		text: {
			en: "Search your discard pile for up to 2 basic Energy cards and attach them to 1 of your Pokémon.",
			fr: "Choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie et attachez-les à 1 de vos Pokémon.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Reflect Energy",
			fr: "Renvoi d'énergie",
		},
		text: {
			en: "Move an Energy card attached to Rotom to 1 of your Benched Pokémon.",
			fr: "Déplacez une carte Énergie attachée à Motisma sur 1 des Pokémon de votre Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
