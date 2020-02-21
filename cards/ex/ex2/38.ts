import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-38",
	localId: 38,

	// Card informations
	name: {
		en: "Illumise",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 314,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 820,
		type: AbilityType.POKEBODY,
		name: {
			en: "Glowing Screen",
		},
		text: {
			en: "As long as Volbeat is in play, any damage done to Illumise by attacks from Fire Pokémon and Dark Pokémon is reduced by 30. You can't reduce more than 30 damage even if there is more than 1 Volbeat in play.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Chaotic Noise",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Pester",
		},
		text: {
			en: "If the Defending Pokémon is affected by a Special Condition, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
