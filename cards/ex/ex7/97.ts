import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-97",
	localId: 97,

	// Card informations
	name: {
		en: "Rocket's Entei ex",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 244,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/97/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 300,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark Condition",
		},
		text: {
			en: "As long as Rocket's Entei ex has any Darkness Energy attached to it, Rocket's Entei ex has no Weakness.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Link",
		},
		text: {
			en: "Search your discard pile for an Energy card and attach it to Rocket's Entei ex.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Volcanic Ash",
		},
		text: {
			en: "Discard 2 Energy attached to Rocket's Entei ex and then choose 1 of your opponent's Pok��mon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
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

