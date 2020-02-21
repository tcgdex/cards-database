import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-10",
	localId: 10,

	// Card informations
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/10/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/10/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
		},
		text: {
			en: "Search your deck for 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Leaf Drain",
			fr: "Feuille Sangsue",
		},
		text: {
			en: "Flip a coin. If heads, heal 30 damage from this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, soignez 30 dégâts à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
