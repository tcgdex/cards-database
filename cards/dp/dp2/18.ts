import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-18",
	localId: 18,

	// Card informations
	name: {
		en: "Uxie",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 480,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 662,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Memory Out",
		},
		text: {
			en: "Once during your opponent's turn, if Uxie is damaged by an opponent's attack (even if Uxie is Knocked Out), you may use this power. The Attacking Pokémon can't use that attack during your opponent's next turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Mind Off",
		},
		text: {
			en: "If you have Mesprit and Azelf in play, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Asleep.",
		},
		damage: 10
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
