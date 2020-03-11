import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-65",
	localId: 65,

	// Card informations
	name: {
		en: "Aegislash-EX",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 681,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/65a/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/65a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ayaka Yoshida",

	abilities: [{
		id: 1408,
		type: AbilityType.TALENT,
		name: {
			en: "Mighty Shield",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from each of your opponent's Pokémon that has Special Energy attached to it.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash Blast",
		},
		text: {
			en: "This attack does 20 more damage for each Metal Energy attached to this Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
