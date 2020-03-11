import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-121",
	localId: 121,

	// Card informations
	name: {
		en: "Electivire",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 466,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 580,
		type: AbilityType.POKEBODY,
		name: {
			en: "Shocking Tail",
		},
		text: {
			en: "As long as Electivire is your Active Pokémon, whenever your opponent attaches an Energy card from his or her hand to 1 of his or her Pokémon, put 2 damage counters on that Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Pulse Barrier",
		},
		text: {
			en: "Discard all of your opponent's Pokémon Tool cards and Stadium cards in play. If you do, prevent all effects, including damage, done to Electivire during your opponent's next turn.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
