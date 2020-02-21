import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-7",
	localId: 7,

	// Card informations
	name: {
		en: "Crustle",
		fr: "Crabaraque",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 558,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/7/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/7/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/7/high",
		},
	},

	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "X-Scissor",
			fr: "Plaie-Croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
