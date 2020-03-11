import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-155",
	localId: 155,

	// Card informations
	name: {
		en: "Gardevoir-EX",
		fr: "Gardevoir-EX",
	},

	hp: 170,

	type: [
		Type.FAIRY,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/155/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/155/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/155/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/155/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Life Leap",
			fr: "Projection Vitale",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Shining Wind",
			fr: "Vent Étincelant",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon has no Weakness.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
