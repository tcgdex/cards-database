import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-RC24",
	localId: "RC24",

	// Card informations
	name: {
		en: "Mew-EX",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},

	abilities: [{
		id: 161,
		type: AbilityType.TALENT,
		name: {
			en: "Versatile",
		},
		text: {
			en: "This Pokémon can use the attacks of any Pokémon in play (both yours and your opponent's). (You still need the necessary Energy to use each attack.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Replace",
		},
		text: {
			en: "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
