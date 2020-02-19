import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-45",
	localId: 45,

	// Card informations
	name: {
		en: "Houndour",
		fr: "Malosse",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 228,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/45/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/45/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/45/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Team Hunt",
			fr: "Chasse en Équipe",
		},
		text: {
			en: "Draw a card for each of your Houndour in play.",
			fr: "Piochez une carte pour chacun de vos Malosse en jeu.",
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
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

