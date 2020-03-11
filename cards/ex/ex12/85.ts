import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-85",
	localId: 85,

	// Card informations
	name: {
		en: "Banette ex",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 354,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/85/high",
		},
	},

	evolveFrom: {
		en: "Shuppet",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 74,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Shady Move",
		},
		text: {
			en: "Once during your turn (before your attack), if Banette ex is your Active Pokémon, you may move 1 damage counter from either player's Pokémon to another Pokémon (yours or your opponent's). This power can't be used if Banette ex is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Chant",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Supporter card in your discard pile. You can't add more than 60 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
