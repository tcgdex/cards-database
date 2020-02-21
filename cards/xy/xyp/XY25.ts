import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY25",
	localId: "XY25",

	// Card informations
	name: {
		en: "Krookodile-EX",
		fr: "Crocorible-EX",
	},

	hp: 180,

	type: [
		Type.DARKNESS,
	],

	dexId: 553,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY25/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY25/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Second Bite",
			fr: "Double Morsure",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Megaton Fang",
			fr: "Croc Lourd",
		},
		text: {
			en: "Discard a card from your hand. If you can't discard a card, this attack does nothing.",
			fr: "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte, cette attaque ne fait rien.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
