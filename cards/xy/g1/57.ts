import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-57",
	localId: 57,

	// Card informations
	name: {
		en: "Tauros",
		fr: "Tauros",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 128,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/57/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/57/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/57/high",
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
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seething Anger",
			fr: "Furax",
		},
		text: {
			en: "Flip a coin for each damage counter on this Pokémon. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce pour chaque marqueur de dégâts placé sur ce Pokémon. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
