import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-40",
	localId: 40,

	// Card informations
	name: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 74,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/40/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/40/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {
			en: "Rock Polish",
			fr: "Poliroche",
		},
		text: {
			en: "During your next turn, this Pokémon has no Retreat Cost.",
			fr: "Pendant votre prochain tour, ce Pokémon n’a pas de Coût de Retraite.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
