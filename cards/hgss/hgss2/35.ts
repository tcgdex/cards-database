import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-35",
	localId: 35,

	// Card informations
	name: {
		en: "Numel",
		fr: "Chamallot",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 322,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/35/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/35/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/35/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flare Bonus",
			fr: "Bonus d'intimidation",
		},
		text: {
			en: "Discard a Fire Energy card from your hand. Then, draw 3 cards.",
			fr: "Défaussez une carte Énergie Fire de votre main. Ensuite, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
