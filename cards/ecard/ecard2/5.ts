import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-5",
	localId: 5,

	// Card informations
	name: {
		en: "Bellossom",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 182,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/5/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 1290,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Flower Supplement",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, attach 1 basic Energy card from your hand to 1 of your Benched Pokémon. This power can't be used if Bellossom is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Knife Leaf",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
