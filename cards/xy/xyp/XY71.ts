import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY71",
	localId: "XY71",

	// Card informations
	name: {
		en: "Hoopa-EX",
		fr: "Hoopa-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 720,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY71/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY71/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",

	abilities: [{
		id: 1080,
		type: AbilityType.TALENT,
		name: {
			en: "Scoundrel Ring",
			fr: "Anneau Malicieux",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may search your deck for up to 3 Pokémon-EX (except for Hoopa-EX), reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez chercher jusqu'à 3 Pokémon-EX(à part Hoopa-EX) dans votre deck, les montrer et les ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Hyperspace Fury",
		},
		text: {
			en: "Discard 2 Energy attached to this Pokémon. This attack does 100 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
