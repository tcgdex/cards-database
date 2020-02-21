import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-11",
	localId: 11,

	// Card informations
	name: {
		en: "Maractus",
		fr: "Maracachi",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 556,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/11/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/11/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Dazzle Dance",
			fr: "Danse Éblouissante",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
