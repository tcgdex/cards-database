import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-60",
	localId: 60,

	// Card informations
	name: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 343,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/60/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/60/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psychic Balance",
			fr: "Équilibre psy",
		},
		text: {
			en: "If you have less cards in your hand than your opponent, draw cards until you have the same number of cards as your opponent. (If you have more or the same number of cards in your hand as your opponent, this attack does nothing.)",
			fr: "Si vous avez moins de cartes en main que votre adversaire, piochez des cartes jusqu'à ce que vous ayez le même nombre de cartes en main. (Si vous avez plus ou autant de cartes en main que votre adversaire, cette attaque est sans effet.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Spin Turn",
			fr: "Vrille",
		},
		text: {
			en: "Switch Baltoy with 1 of your Benched Pokémon.",
			fr: "Échangez Balbuto avec 1 de vos Pokémon de Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
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
