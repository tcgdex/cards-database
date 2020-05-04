import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-76",
	localId: 76,

	// Card informations
	name: {
		en: "Plusle",
		fr: "Posipi",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 311,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/76/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/76/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		name: {
			en: "Greedy Draw",
			fr: "Pioche avide",
		},
		text: {
			en: "If you have the same number of cards or less in your hand as your opponent, draw cards until you have 1 more card than your opponent. (If you have more cards in your hand than your opponent, this attack does nothing.)",
			fr: "Si vous possédez autant ou moins de cartes en main que votre adversaire, piochez des cartes jusqu'à ce que vous ayez 1 carte de plus que votre adversaire. (Si vous avez plus de cartes en main que votre adversaire, cette attaque est sans effet.)",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Hand Charge",
			fr: "Charge manuelle",
		},
		text: {
			en: "Attach a Lightning Energy card from your hand to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie Lightning de votre main à 1 de vos Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
