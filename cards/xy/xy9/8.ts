import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-8",
	localId: 8,

	// Card informations
	name: {
		en: "Lilligant",
		fr: "Fragilady",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 549,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/8/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/8/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/8/high",
		},
	},

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Boo-Hoo",
			fr: "Snif",
		},
		text: {
			en: "If your opponent attaches an Energy card from his or her hand to the Defending Pokémon during his or her next turn, that Pokémon will be Asleep.",
			fr: "Si votre adversaire attache une carte Énergie de sa main au Pokémon Défenseur pendant son prochain tour, le Pokémon ciblé sera Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Slice",
			fr: "Tranche Feuille",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
