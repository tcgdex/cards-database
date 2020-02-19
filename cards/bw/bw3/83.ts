import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-83",
	localId: 83,

	// Card informations
	name: {
		en: "Durant",
		fr: "Fermite",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 632,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/83/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/83/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/83/high.png",
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
		cost: [
			Type.METAL
		],
		name: {
			en: "Devour",
			fr: "Voracité",
		},
		text: {
			en: "For each of your Durant in play, discard the top card of your opponent's deck.",
			fr: "Pour chacun de vos Fermite en jeu, défaussez la carte du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vice Grip",
			fr: "Force Poigne",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card

