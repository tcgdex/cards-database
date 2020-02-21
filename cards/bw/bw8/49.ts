import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-49",
	localId: 49,

	// Card informations
	name: {
		en: "Rotom",
		fr: "Motisma",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/49/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/49/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Electribonus",
			fr: "Électribonus",
		},
		text: {
			en: "Discard a Lightning Energy card from your hand. If you do, draw 3 cards.",
			fr: "Défaussez une carte Énergie Lightning de votre main. Dans ce cas, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Poltergeist",
			fr: "Poltergeist",
		},
		text: {
			en: "Your opponent reveals his or her hand. This attack does 20 damage times the number of Trainer cards in your opponent's hand.",
			fr: "Votre adversaire montre sa main. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Dresseur dans la main de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
