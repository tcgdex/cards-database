import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-63",
	localId: 63,

	// Card informations
	name: {
		en: "Growlithe",
		fr: "Caninos Niv. 26",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 58,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/63/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/63/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stoke",
			fr: "Crémation",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to Growlithe. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck une carte Énergie Fire et attachez-la à Caninos. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Growlithe does 10 damage to itself.",
			fr: "Caninos s'inflige 10 dégâts.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
