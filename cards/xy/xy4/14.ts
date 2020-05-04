import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-14",
	localId: 14,

	// Card informations
	name: {
		en: "Kingler",
		fr: "Krabboss",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 99,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/14/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/14/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/14/high",
		},
	},

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Guard Claw",
			fr: "Griffe de Garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
