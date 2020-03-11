import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-72",
	localId: 72,

	// Card informations
	name: {
		en: "Piplup",
		fr: "Tiplouf",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 393,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/72/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/72/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Splatter",
			fr: "Baie Pecha",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Si Tiplouf est Empoisonné, retirez-lui l'État Spécial Empoisonné à la fin du tour de chaque joueur.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			fr: "Crépitement",
		},
		text: {
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
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
