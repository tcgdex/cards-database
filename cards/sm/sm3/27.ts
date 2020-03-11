import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-27",
	localId: 27,

	// Card informations
	name: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Saya Tsuruta",



	attacks: [{
		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Icy Snow",
			fr: "Verglas",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
