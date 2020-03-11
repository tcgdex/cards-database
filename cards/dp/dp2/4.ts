import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-4",
	localId: 4,

	// Card informations
	name: {
		en: "Azelf",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 482,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 510,
		type: AbilityType.POKEBODY,
		name: {
			en: "Downer Material",
		},
		text: {
			en: "If you have Uxie and Mesprit in play, the attack cost of each of your opponent's Basic Pokémon's attack is Colorless more. You can't use more than 1 Downer Material Poké-Body each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Bind Pulse",
		},
		text: {
			en: "During your opponent's next turn, your opponent can't attach any Special Energy cards from his or her hand to any of his or her Pokémon.",
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
