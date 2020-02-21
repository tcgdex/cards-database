import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-11",
	localId: 11,

	// Card informations
	name: {
		en: "Metagross δ",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/11/high",
		},
	},

	evolveFrom: {
		en: "Metang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 832,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Delta Control",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 4 cards of your deck, choose 1 of them, and put it into your hand. Put the 3 other cards on the bottom of your deck in any order. This power can't be used if Metagross is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.METAL
		],
		name: {
			en: "Crush and Burn",
		},
		text: {
			en: "You may discard as many Energy cards as you like attached to your Pokémon in play. If you do, this attack does 30 damage plus 20 more damage for each Energy card you discarded.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
