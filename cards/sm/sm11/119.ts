import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-119",
	localId: 119,

	// Card informations
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 530,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/119/high",
		},
	},

	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Rototiller",
			fr: "Fertilisation",
		},
		text: {
			en: "Shuffle 4 cards from your discard pile into your deck.",
			fr: "Mélangez 4 cartes de votre pile de défausse avec votre deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
