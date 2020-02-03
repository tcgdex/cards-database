import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-102",
	localId: 102,

	// Card informations
	name: {
		en: "M Latios-EX",
		fr: "M Latios-EX",
	},

	hp: 220,

	type: [
		Type.DRAGON,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/102/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/102/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/102/high.png",
		},
	},

	evolveFrom: {
		en: "Latios-EX",
		fr: "Latios-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Ace",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "Discard 2 Energy attached to this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			fr: "Prodige Sonique",
		},
		text: {
			fr: "Défaussez 2 Énergies attachées à ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

