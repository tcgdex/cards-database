import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-40",
	localId: 40,

	// Card informations
	name: {
		en: "Tyranitar",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/40/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Destructive Roar",
		},
		text: {
			en: "Flip a coin. If heads, discard 1 Energy card attached to 1 of your opponent's Pokémon.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gigacrush",
		},
		text: {
			en: "Each player discards the top 3 cards from his or her deck.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
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
