import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-81",
	localId: 81,

	// Card informations
	name: {
		en: "Porygon",
		fr: "Porygon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/81/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/81/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Calculate",
			fr: "Calculer",
		},
		text: {
			en: "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
			fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les au dessus de votre deck dans n'importe quel ordre.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharpen",
			fr: "Affûtage",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
