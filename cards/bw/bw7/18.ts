import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-18",
	localId: 18,

	// Card informations
	name: {
		en: "Charmander",
		fr: "Salamèche",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 4,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/18/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/18/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/18/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/18/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Draw In",
			fr: "Aspiracartes",
		},
		text: {
			en: "Attach 2 Fire Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez 2 cartes Énergie Fire de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

