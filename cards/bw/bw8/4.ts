import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-4",
	localId: 4,

	// Card informations
	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 415,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/4/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/4/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/4/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sting Missile",
			fr: "Dard-Missile",
		},
		text: {
			en: "Shuffle this Pokémon and all cards attached to it into your deck.",
			fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card

