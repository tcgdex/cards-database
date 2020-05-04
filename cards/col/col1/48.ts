import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-48",
	localId: 48,

	// Card informations
	name: {
		en: "Pidgeotto",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 17,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/48/high",
		},
	},

	evolveFrom: {
		en: "Pidgey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twister",
		},
		text: {
			en: "Flip 2 coins. If both of them are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
