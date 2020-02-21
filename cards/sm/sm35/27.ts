import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-27",
	localId: 27,

	// Card informations
	name: {
		en: "Shining Volcanion",
		fr: "Volcanion Brillant",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 721,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Dual Pump",
			fr: "Double Pompe",
		},
		text: {
			en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quad Smash",
			fr: "Quadruple Destruction",
		},
		text: {
			en: "Flip 4 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
