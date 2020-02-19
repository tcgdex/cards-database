import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-51",
	localId: 51,

	// Card informations
	name: {
		en: "Drampa",
		fr: "Draïeul",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 780,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/51/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/51/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/51/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon Wisdom",
			fr: "Sagesse des Dragons",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Dragon Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon Dragon.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Voice",
			fr: "Mégaphone",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card

