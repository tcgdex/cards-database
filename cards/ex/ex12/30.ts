import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-30",
	localId: 30,

	// Card informations
	name: {
		en: "Cascoon",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 268,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/30/high",
		},
	},

	evolveFrom: {
		en: "Wurmple",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sachiko Adachi",

	abilities: [{
		id: 38,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Emerge",
		},
		text: {
			en: "Once during your turn (before your attack), if Cascoon is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward. This power can't be used if Cascoon is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
