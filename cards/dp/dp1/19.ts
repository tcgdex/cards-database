import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Beautifly",
		fr: "Charmillon",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 267,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/19/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/19/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/19/high",
		},
	},

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Drain",
			fr: "Giga-sangsue",
		},
		text: {
			en: "After your attack, remove from Beautifly the number of damage counters equal to the damage you did to the Defending Pokémon.",
			fr: "Après votre attaque, retirez à Charmillon autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
