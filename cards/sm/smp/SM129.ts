import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM129",
	localId: "SM129",

	// Card informations
	name: {
		en: "Kyogre",
		fr: "Kyogre",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM129/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM129/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM129/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dual Splash",
			fr: "Double Splash",
		},
		text: {
			en: "This attack does 30 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Grand Wave",
			fr: "Vague Imposante",
		},
		text: {
			en: "This Pokémon can't use Grand Wave during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Vague Imposante pendant votre prochain tour.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
