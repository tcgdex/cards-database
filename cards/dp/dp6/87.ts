import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-87",
	localId: 87,

	// Card informations
	name: {
		en: "Chinchou",
		fr: "Loupio",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 170,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/87/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/87/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
			fr: "Ultrason",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse vague",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
