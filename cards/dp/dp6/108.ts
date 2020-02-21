import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-108",
	localId: 108,

	// Card informations
	name: {
		en: "Nincada",
		fr: "Ningale",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 290,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/108/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/108/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Big Bite",
			fr: "Grosse morsure",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
