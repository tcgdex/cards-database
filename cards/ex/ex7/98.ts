import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-98",
	localId: 98,

	// Card informations
	name: {
		en: "Rocket's Hitmonchan ex",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 107,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 13,
		type: AbilityType.POKEBODY,
		name: {
			en: "Strikes Back",
		},
		text: {
			en: "If Rocket's Hitmonchan ex is your Active Pokémon and is damaged by an opponent's attack (even if Rocket's Hitmonchan ex is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mach Punch",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Magnum Punch",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
