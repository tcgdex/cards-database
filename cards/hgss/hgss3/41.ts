import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-41",
	localId: 41,

	// Card informations
	name: {
		en: "Vaporeon",
		fr: "Aquali",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/41/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/41/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/41/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
			fr: "Spirale épuisante",
		},
		text: {
			en: "Remove 2 damage counters from Vaporeon.",
			fr: "Retirez 2 marqueurs de dégât à Aquali.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dual Splash",
			fr: "Double splash",
		},
		text: {
			en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun d'entre eux. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
