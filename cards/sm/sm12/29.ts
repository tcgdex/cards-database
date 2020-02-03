import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-29",
	localId: 29,

	// Card informations
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/29/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/29/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/29/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 112,
		name: "0313"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Fling",
			fr: "Dégommage Feu",
		},
		text: {
			en: "Put 4 Fire Energy cards from your discard pile into your hand.",
			fr: "Ajoutez 4 cartes Énergie Fire de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Kindle",
			fr: "Enflammer",
		},
		text: {
			en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

