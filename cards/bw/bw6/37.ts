import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-37",
	localId: 37,

	// Card informations
	name: {
		en: "Alomomola",
		fr: "Mamanbo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 594,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/37/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/37/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mysterious Beam",
			fr: "Rayon Mystérieux",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
