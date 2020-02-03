import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-3",
	localId: 3,

	// Card informations
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/3/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/3/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/3/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Deep Sea Swirl",
			fr: "Remous abyssal",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw 5 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse vague",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

