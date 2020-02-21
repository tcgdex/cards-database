import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-73",
	localId: 73,

	// Card informations
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 106,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/73/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/73/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Special Combo",
			fr: "Combo Spéciale",
		},
		text: {
			en: "You can use this attack only if your Hitmonchan used Hit and Run during your last turn. This attack does 90 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous ne pouvez utiliser cette attaque que si votre Tygnon a utilisé Frappe et Fuite lors de votre dernier tour. Cette attaque inflige 90 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Mega Kick",
			fr: "Ultimawashi",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
