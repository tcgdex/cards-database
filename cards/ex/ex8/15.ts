import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-15",
	localId: 15,

	// Card informations
	name: {
		en: "Slaking",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 289,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/15/high",
		},
	},

	evolveFrom: {
		en: "Vigoroth",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 19,
		type: AbilityType.POKEBODY,
		name: {
			en: "Lazy Aura",
		},
		text: {
			en: "As long as Slaking is your Active Pokémon, any damage done by attacks from your opponent's Pokémon-ex is reduced by 30 (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lazy Headbutt",
		},
		text: {
			en: "Slaking is now Asleep.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
