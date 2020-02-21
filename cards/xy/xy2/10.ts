import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-10",
	localId: 10,

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
			en: "https://assets.tcgdex.net/en/xy/xy2/10/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/10/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/10/high",
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
			Type.GRASS
		],
		name: {
			en: "Exciting Shake",
			fr: "Ébouriffement",
		},
		text: {
			en: "During your next turn, flip 6 coins instead of 2 for this Pokémon's Prickly Needles attack.",
			fr: "Pendant votre prochain tour, lancez 6 pièces au lieu de 2 pour l'attaque Épines Acérées de ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Prickly Needles",
			fr: "Épines Acérées",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
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
