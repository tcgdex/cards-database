import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-64",
	localId: 64,

	// Card informations
	name: {
		en: "Hippopotas",
		fr: "Hippopotas Niv. 31",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 449,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/64/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/64/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Push Down",
			fr: "Renverser",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Endeavor",
			fr: "Effort",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
