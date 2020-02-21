import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM121",
	localId: "SM121",

	// Card informations
	name: {
		en: "Raikou-GX",
		fr: "Raikou-GX",
	},

	hp: 170,

	type: [
		Type.LIGHTNING,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM121/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM121/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 50 damage to itself.",
			fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 50 dégâts.",
		},
		damage: 150
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Thunderous Rain-GX",
			fr: "Pluie Tonitruante-GX",
		},
		text: {
			en: "This attack does 100 damage to each of your opponent's Pokémon that has any Energy attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 100 dégâts à tout Pokémon de votre adversaire auquel de l’Énergie est attachée. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
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
