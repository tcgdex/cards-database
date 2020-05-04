import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-49",
	localId: 49,

	// Card informations
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 689,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/49/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/49/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/49/high",
		},
	},

	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Rock Rush",
			fr: "Déferlante Rocheuse",
		},
		text: {
			en: "Discard as many Fighting Energy cards as you like from your hand. This attack does 30 damage times the number of Energy cards you discarded.",
			fr: "Défaussez autant de cartes Énergie Fighting que vous voulez de votre main. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
