import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-16",
	localId: 16,

	// Card informations
	name: {
		en: "Ponyta",
		fr: "Ponyta",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 77,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/16/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/16/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/16/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Returning Flames",
			fr: "Retour de Flammes",
		},
		text: {
			en: "Put 2 Fire Energy cards from your discard pile into your hand.",
			fr: "Prenez 2 cartes Énergie Fire dans votre pile de défausse et ajoutez-les à votre main.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

