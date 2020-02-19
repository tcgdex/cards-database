import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-9",
	localId: 9,

	// Card informations
	name: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 268,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/9/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/9/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/9/high.png",
		},
	},

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	tags: [
		Tag.STAGE1,
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
			en: "Tangle Drag",
			fr: "Lasso Piège",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon.",
			fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

