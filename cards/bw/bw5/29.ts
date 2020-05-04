import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-29",
	localId: 29,

	// Card informations
	name: {
		en: "Empoleon",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/29/high",
		},
	},

	evolveFrom: {
		en: "Prinplup",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoki Saito",

	abilities: [{
		id: 620,
		type: AbilityType.TALENT,
		name: {
			en: "Diving Draw",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Attack Command",
		},
		text: {
			en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
