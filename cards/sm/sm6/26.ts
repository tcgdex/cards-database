import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-26",
	localId: 26,

	// Card informations
	name: {
		en: "Clawitzer",
		fr: "Gamblast",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 693,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/26/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/26/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/26/high",
		},
	},

	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 136,
		name: "otumami"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Standing By",
			fr: "État d’Alerte",
		},
		text: {
			en: "During your next turn, this Pokémon's Sharpshooting attack does 120 damage instead of 40.",
			fr: "Pendant votre prochain tour, l’attaque Tir de Précision de ce Pokémon inflige 120 dégâts au lieu de 40.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sharpshooting",
			fr: "Tir de Précision",
		},
		text: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
