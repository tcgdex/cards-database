import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-21",
	localId: 21,

	// Card informations
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 473,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/21/high",
		},
	},

	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Stomp",
			fr: "Double Écrasement",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Forceful Tackle",
			fr: "Charge Énergique",
		},
		text: {
			en: "You may put up to 9 damage counters on this Pokémon. This attack does 10 more damage for each damage counter you placed in this way.",
			fr: "Vous pouvez placer jusqu’à 9 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé de cette façon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
