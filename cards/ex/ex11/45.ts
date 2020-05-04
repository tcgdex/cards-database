import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-45",
	localId: 45,

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
			en: "https://assets.tcgdex.net/en/ex/ex11/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 166,
		type: AbilityType.POKEBODY,
		name: {
			en: "Beacon Protection",
		},
		text: {
			en: "As long as you have Volbeat in play, prevent all effects, including damage, done to Illumise by attacks from your opponent's Pokémon that has Dark in its name.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
		},
		text: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Strange Rasping",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
