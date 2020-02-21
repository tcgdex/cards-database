import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-78",
	localId: 78,

	// Card informations
	name: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 299,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/78/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/78/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stiffen",
			fr: "Raidissement",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 40 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
