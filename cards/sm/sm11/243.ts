import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-243",
	localId: 243,

	// Card informations
	name: {
		en: "Latios-GX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/243/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/243/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],



	abilities: [{
		id: 1010,
		type: AbilityType.TALENT,
		name: {
			en: "Power Bind",
		},
		text: {
			en: "If you have 4 or fewer Pokémon in play, this Pokémon can't attack.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tag Purge",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from TAG TEAM Pokémon.",
		},
		damage: 120
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Clear Vision GX",
		},
		text: {
			en: "For the rest of this game, your opponent can't use any GX attacks. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
