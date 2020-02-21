import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-24",
	localId: 24,

	// Card informations
	name: {
		en: "Hitmonchan",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 107,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},

	abilities: [{
		id: 66,
		type: AbilityType.POKEBODY,
		name: {
			en: "Stages of Evolution",
		},
		text: {
			en: "As long as Hitmonchan is an Evolved Pokémon, Hitmonchan gets +30 HP.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Punch",
		},
		text: {
			en: "Does 10 damage times the number of your opponent's Benched Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speedy Uppercut",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
