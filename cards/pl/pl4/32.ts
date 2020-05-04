import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-32",
	localId: 32,

	// Card informations
	name: {
		en: "Spiritomb",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",

	abilities: [{
		id: 293,
		type: AbilityType.POKEBODY,
		name: {
			en: "Keystone Seal",
		},
		text: {
			en: "As long as Spiritomb is your Active Pokémon, each player can't play any Trainer cards from his or her hand.",
		}
	}],

	attacks: [{
		name: {
			en: "Darkness Grace",
		},
		text: {
			en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Spiritomb. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Will-o'-the-wisp",
		},
		damage: 10
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
