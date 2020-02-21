import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-21",
	localId: 21,

	// Card informations
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 131,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/21/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/21/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Carry In",
			fr: "Importer",
		},
		text: {
			en: "Search your deck for a Pokémon Tool card, a Supporter card, and a basic Energy card, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Outil Pokémon, une carte Supporter et une carte Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse vague",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
