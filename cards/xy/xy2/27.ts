import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-27",
	localId: 27,

	// Card informations
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 370,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/27/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/27/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Heart Wink",
			fr: "Clin de Cœur",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't draw a card at the beginning of his or her next turn.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas piocher de carte au début de son prochain tour.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
