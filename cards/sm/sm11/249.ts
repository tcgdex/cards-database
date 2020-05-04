import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-249",
	localId: 249,

	// Card informations
	name: {
		en: "Naganadel-GX",
	},

	hp: 210,

	type: [
		Type.DRAGON,
	],

	dexId: 804,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/249/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/249/high",
		},
	},

	evolveFrom: {
		en: "Poipole",
	},

	tags: [
		Tag.STAGE1,
	],



	abilities: [{
		id: 1056,
		type: AbilityType.TALENT,
		name: {
			en: "Ultra Conversion",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard an Ultra Beast card from your hand. If you do, draw 3 cards.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venom Shot",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon. This attack does 170 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Injection GX",
		},
		text: {
			en: "Add a card from your opponent's discard pile to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
