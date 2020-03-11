import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-9",
	localId: 9,

	// Card informations
	name: {
		en: "Spinarak",
		fr: "Mimigal",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 167,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Misa Tsutsui",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Spider Scram",
			fr: "Détalage Arachnéen",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned. Put this Pokémon and all cards attached to it in the Lost Zone.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé. Placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sting",
			fr: "Dard",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
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
