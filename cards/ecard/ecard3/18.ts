import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-18",
	localId: 18,

	// Card informations
	name: {
		en: "Magcargo",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/18/high",
		},
	},

	evolveFrom: {
		en: "Slugma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 1019,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Streaming Mantle",
		},
		text: {
			en: "When you play Magcargo from your hand to evolve your Active Pokémon, you may discard the top 3 cards of your deck and then shuffle 3 basic energy cards from your discard pile into your deck. If you do, your opponent must do the same.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crushing Lava",
		},
		text: {
			en: "You may discard a or basic Energy card attached to Magcargo. If you discard a Energy card in this way, the Defending Pokémon is now Burned. If you discard a Energy card in this way, this attack does 40 damage plus 20 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
