import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-46",
	localId: 46,

	// Card informations
	name: {
		en: "Houndoom",
		fr: "Démolosse",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/46/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/46/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/46/high",
		},
	},

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sekio",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nasty Plot",
			fr: "Machination",
		},
		text: {
			en: "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Attack Operation",
			fr: "Opération d’Attaque",
		},
		text: {
			en: "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
			fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
