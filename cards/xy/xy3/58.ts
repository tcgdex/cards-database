import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-58",
	localId: 58,

	// Card informations
	name: {
		en: "Landorus",
		fr: "Démétéros",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 645,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/58/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/58/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/58/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Shout of Power",
			fr: "Cri de Puissance",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sky Lariat",
			fr: "Lasso Céleste",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

