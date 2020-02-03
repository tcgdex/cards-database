import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-21",
	localId: 21,

	// Card informations
	name: {
		en: "Houndoom-EX",
		fr: "Démolosse-EEX",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/21/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/21/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/21/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Melting Horn",
			fr: "Corne de Fusion",
		},
		text: {
			en: "Discard the top 2 cards of your opponent's deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Grand Flame",
			fr: "Flamme Colossale",
		},
		text: {
			en: "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Fire de votre pile de défausse à l'un de vos Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

