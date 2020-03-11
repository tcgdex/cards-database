import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-81",
	localId: 81,

	// Card informations
	name: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},

	hp: 40,

	type: [
		Type.DARKNESS,
	],

	dexId: 19,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/81/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/81/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "nagimiso",



	attacks: [{
		name: {
			en: "Focus Energy",
			fr: "Puissance",
		},
		text: {
			en: "During your next turn, this Pokémon's Bite attack's base damage is 60.",
			fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Morsure de ce Pokémon sont de 60.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
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
