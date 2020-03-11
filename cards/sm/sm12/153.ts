import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-153",
	localId: 153,

	// Card informations
	name: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 684,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/153/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/153/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/153/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/153/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Cotton Guard",
			fr: "Cotogarde",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
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
