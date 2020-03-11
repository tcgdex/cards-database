import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-59",
	localId: 59,

	// Card informations
	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 415,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/59/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/59/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Honey Scent",
			fr: "Parfum de miel",
		},
		text: {
			en: "Remove 2 damage counters from 1 of your Pokémon.",
			fr: "Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Flitter",
			fr: "Voltige",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
