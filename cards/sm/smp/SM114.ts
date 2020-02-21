import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM114",
	localId: "SM114",

	// Card informations
	name: {
		en: "Ash's Pikachu",
		fr: "Pikachu de Sacha",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM114/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM114/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 195,
		name: "2017 Pikachu Project"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Iron Tail",
			fr: "Queue de Fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
		},
		text: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie de ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
