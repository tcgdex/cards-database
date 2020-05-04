import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-34",
	localId: 34,

	// Card informations
	name: {
		en: "Aipom",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 190,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sachiko Adachi",

	abilities: [{
		id: 1055,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Snappy Move",
		},
		text: {
			en: "Once during your turn (before your attack), if Aipom is on your Bench, you may draw a card. Then, discard all cards attached to Aipom and put Aipom on the bottom of your deck. You can't use more than 1 Snappy Move Poké-Power each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Snap Tail",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
