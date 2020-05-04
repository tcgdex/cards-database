import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-74",
	localId: 74,

	// Card informations
	name: {
		en: "Crabominable",
		fr: "Crabominable",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 740,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/74/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/74/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/74/high",
		},
	},

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Gutsy Hammer",
			fr: "Marteau Courageux",
		},
		text: {
			en: "This Pokémon does 10 damage to itself for each damage counter on it.",
			fr: "Ce Pokémon s’inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 80
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Double Stomp",
			fr: "Double Écrasement",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
