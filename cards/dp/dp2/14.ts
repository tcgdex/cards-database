import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-14",
	localId: 14,

	// Card informations
	name: {
		en: "Mesprit",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 481,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 52,
		type: AbilityType.POKEBODY,
		name: {
			en: "Upper Material",
		},
		text: {
			en: "If you have Uxie and Azelf in play, the Retreat Cost for each Uxie, Mesprit, and Azelf (both yours and your opponent's) is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Teleportation Burst",
		},
		text: {
			en: "You may switch Mesprit with 1 of your Benched Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
