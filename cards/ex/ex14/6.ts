import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-6",
	localId: 6,

	// Card informations
	name: {
		en: "Ludicolo δ",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/6/high",
		},
	},

	evolveFrom: {
		en: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 978,
		type: AbilityType.POKEBODY,
		name: {
			en: "Overzealous",
		},
		text: {
			en: "If your opponent has any Pokémon-ex in play, each of Ludicolo's attacks does 30 more damage to the Defending Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Knock Off",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking and discard it.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Punch",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
