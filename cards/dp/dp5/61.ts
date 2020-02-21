import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-61",
	localId: 61,

	// Card informations
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 425,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/61/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/61/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {
			en: "Delivery",
			fr: "Livraison",
		},
		text: {
			en: "Flip a coin. If heads, put any 1 card from your discard pile into your hand.",
			fr: "Lancez une pièce. Si c'est face, placez dans votre main n'importe quelle carte de votre pile de défausse.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Reaction",
			fr: "Réagir",
		},
		text: {
			en: "Switch Drifloon with 1 of your Benched Pokémon.",
			fr: "Échangez Baudrive avec 1 des Pokémon de votre Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
