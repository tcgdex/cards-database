import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY54",
	localId: "XY54",

	// Card informations
	name: {
		en: "Blaziken-EX",
		fr: "Braségali-EEX",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY54/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY54/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fist of Focus",
			fr: "Poing Déterminé",
		},
		text: {
			en: "Attach an Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flare Storm",
			fr: "Tempête Flamboyante",
		},
		text: {
			en: "Flip a coin for each Fire Energy attached to this Pokémon. This attack does 20 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Fire attachée à ce Pokémon. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
