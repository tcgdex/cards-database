import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Charizard",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/6/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hiromichi Sugiyama",

	abilities: [{
		id: 278,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Burning Energy",
		},
		text: {
			en: "Once during your turn (before you attack), you may turn all basic Energy attached to all of your Pokémon into Fire Energy for the rest of the turn. This power can't be used if Charizard is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Scorching Whirlwind",
		},
		text: {
			en: "Flip 2 coins. If 1 of them is tails, discards 3 Energy cards attached to Charizard. If both of them are tails, discard all Energy cards attached to Charizard.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
