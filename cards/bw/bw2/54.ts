import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-54",
	localId: 54,

	// Card informations
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 529,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/54/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/54/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/54/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hone Claws",
			fr: "Aiguisage",
		},
		text: {
			en: "During your next turn, each of this Pokémon's attacks does 30 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card

