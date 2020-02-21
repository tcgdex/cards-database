import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-23",
	localId: 23,

	// Card informations
	name: {
		en: "Ponyta",
		fr: "Ponyta",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 77,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 197,
		name: "Uta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Minor Errand-Running",
			fr: "Rendez-Vous Mineur",
		},
		text: {
			en: "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
