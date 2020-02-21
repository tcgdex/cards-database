import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-24",
	localId: 24,

	// Card informations
	name: {
		en: "Heracross 4",
		fr: "Scarhino  Niv. 51",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/24/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/24/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {
			en: "Focus Energy",
			fr: "Puissance",
		},
		text: {
			en: "During your next turn, Heracross 's Megahorn attack's base damage is 100.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Megacorne de Scarhino  sont de 100.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Megahorn",
			fr: "Megacorne",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
