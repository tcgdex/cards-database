import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-64",
	localId: 64,

	// Card informations
	name: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 288,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/64/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/64/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/64/high",
		},
	},

	evolveFrom: {
		en: "Slakoth",
		fr: "Parecool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque imprudente",
		},
		text: {
			en: "Flip a coin. If tails, Vigoroth does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Vigoroth s'inflige 10 dégâts.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fight Back",
			fr: "Rendre les coups",
		},
		text: {
			en: "If Vigoroth has any damage counters on it, this attack does 50 damage plus 20 more damage.",
			fr: "Si Vigoroth possède des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
