import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-7",
	localId: 7,

	// Card informations
	name: {
		en: "Victini ◇",
		fr: "Victini ",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/7/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/7/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Infinity",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "This attack does 20 damage for each basic Energy card in your discard pile. Then, shuffle those cards into your deck.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			fr: "Infinité",
		},
		text: {
			fr: "Cette attaque inflige 20 dégâts pour chaque carte Énergie de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
		},
		damage: "20×"
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
