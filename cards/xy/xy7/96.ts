import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-96",
	localId: 96,

	// Card informations
	name: {
		en: "Primal Kyogre-EX",
		fr: "Primo-Kyogre-EX",
	},

	hp: 240,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/96/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/96/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/96/high",
		},
	},

	evolveFrom: {
		en: "Kyogre-EX",
		fr: "Kyogre-EX",
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
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Tidal Storm",
			fr: "Max Θ",
		},
		text: {
			en: "Move 2 Energy from this Pokémon to 1 of your Benched Pokémon. This attack does 30 damage to each of your opponent's Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 150
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			fr: "Tempête Océanique",
		},
		text: {
			fr: "Déplacez 2 Énergies de ce Pokémon vers l'un de vos Pokémon de Banc. Cette attaque inflige 30 dégâts à chacun des Pokémon-EX de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
