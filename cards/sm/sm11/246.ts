import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-246",
	localId: 246,

	// Card informations
	name: {
		en: "Mawile-GX",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/246/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/246/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],



	abilities: [{
		id: 1398,
		type: AbilityType.TALENT,
		name: {
			en: "Captivating Wink",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may have your opponent reveal their hand and put any number of Basic Pokémon you find there onto their Bench.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Wily Bite",
		},
		text: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Big Eater GX",
		},
		text: {
			en: "Your opponent reveals their hand. Discard all Supporter cards you find there. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
