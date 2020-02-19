import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-86",
	localId: 86,

	// Card informations
	name: {
		en: "Rotom",
		fr: "Motisma",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/86/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/86/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 59,
		name: "Mina Nakai"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cycle Draw",
			fr: "Pioche Cyclique",
		},
		text: {
			en: "Discard a card from your hand. If you do, draw 2 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Assist",
			fr: "Assistance Énergétique",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

